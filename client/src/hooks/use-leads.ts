import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // Try to parse the error response
        try {
          const errorData = await res.json();
          // Use Zod error schema if available, or fallback to generic message
          const parsedError = api.leads.create.responses[400].safeParse(errorData);
          if (parsedError.success) {
            throw new Error(parsedError.data.message);
          }
        } catch (e) {
          // If JSON parse fails or schema doesn't match, ignore and throw generic
        }
        throw new Error("Failed to submit lead");
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your information has been submitted. We'll be in touch shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
}
