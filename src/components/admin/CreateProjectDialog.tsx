import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Loader2, Image as ImageIcon, X } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    category: z.string().min(2, "Category is required"),
    location: z.string().min(2, "Location must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    image: z.string().min(1, "Image URL or upload is required"),
    date: z.string().min(2, "Date is required"),
});

type FormValues = z.infer<typeof formSchema>;

interface CreateProjectDialogProps {
    onProjectAdded: (project: FormValues) => void;
}

export function CreateProjectDialog({ onProjectAdded }: CreateProjectDialogProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            category: "Agriculture",
            location: "",
            description: "",
            image: "",
            date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        },
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File size too big (max 5MB)");
                return;
            }

            const objectUrl = URL.createObjectURL(file);
            setPreviewUrl(objectUrl);
            form.setValue("image", objectUrl);
        }
    };

    const removeImage = () => {
        setPreviewUrl(null);
        form.setValue("image", "");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const onSubmit = async (values: FormValues) => {
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        onProjectAdded(values);

        toast.success("Project added successfully");
        setLoading(false);
        setOpen(false);
        form.reset();
        setPreviewUrl(null);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" /> Add Project
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] glass max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add Portfolio Project</DialogTitle>
                    <DialogDescription>
                        Feature a new project in your portfolio.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Tea Estate Mapping" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Agriculture">Agriculture</SelectItem>
                                                <SelectItem value="Mapping">Mapping</SelectItem>
                                                <SelectItem value="Inspection">Inspection</SelectItem>
                                                <SelectItem value="Conservation">Conservation</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Date</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Oct 2023" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Thyolo, Malawi" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="space-y-2">
                            <FormLabel>Project Image</FormLabel>
                            <div className="flex flex-col gap-4">
                                {previewUrl ? (
                                    <div className="relative h-48 w-full overflow-hidden rounded-lg border border-border">
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="h-full w-full object-cover"
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            className="absolute right-2 top-2 h-8 w-8 rounded-full"
                                            onClick={removeImage}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 transition-colors hover:bg-muted"
                                    >
                                        <ImageIcon className="mb-2 h-8 w-8 text-muted-foreground" />
                                        <span className="text-sm text-muted-foreground">Click to upload project image</span>
                                        <span className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</span>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                />
                                <div className="text-center text-xs text-muted-foreground">OR</div>
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="External Image URL (https://...)"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e);
                                                        if (e.target.value.startsWith('http')) {
                                                            setPreviewUrl(e.target.value);
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe the project goals and results..."
                                            className="min-h-[120px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={loading}>
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Add to Portfolio
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
