import z from "zod";

export const IssueSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(65535).min(1),
});

export const PatchIssueSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(65535).optional(),
  status: z.string().optional(),
  assigneeId: z
    .string()
    .min(1, "Assigned to userID is required")
    .max(255)
    .nullable()
    .optional(),
});
