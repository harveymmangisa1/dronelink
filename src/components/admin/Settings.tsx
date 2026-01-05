import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
    Settings as SettingsIcon,
    Bell,
    Shield,
    Globe,
    Mail,
    Save,
    User,
    Lock
} from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
    const handleSave = () => {
        toast.success("Settings updated successfully!");
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your account preferences and site configuration.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {/* General Settings */}
                <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <SettingsIcon className="h-5 w-5 text-accent" />
                            General Information
                        </CardTitle>
                        <CardDescription>Primary site contact and identification settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Company Name</label>
                            <Input defaultValue="DronelinkMW" className="bg-background/50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Support Email</label>
                            <Input defaultValue="support@dronelinkmw.com" className="bg-background/50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Primary Region</label>
                            <Input defaultValue="Malawi (SADC)" className="bg-background/50" />
                        </div>
                    </CardContent>
                </Card>

                {/* Security Settings */}
                <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-accent" />
                            Security & Privacy
                        </CardTitle>
                        <CardDescription>Configure authentication and data access policies.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium">Two-Factor Authentication</p>
                                <p className="text-xs text-muted-foreground">Add an extra layer of security to your account.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium">Public Portfolio Access</p>
                                <p className="text-xs text-muted-foreground">Allow non-logged in users to see public projects.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium">Auto-Archive Logs</p>
                                <p className="text-xs text-muted-foreground">Automatically archive activity logs after 30 days.</p>
                            </div>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm border-white/10">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-accent" />
                            Notifications
                        </CardTitle>
                        <CardDescription>Choose how you want to be notified about inquiries and system alerts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-4 text-center p-6 rounded-xl bg-muted/10 border border-white/5 group hover:border-accent/30 transition-colors">
                                <Mail className="w-8 h-8 mx-auto text-blue-500 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold">Email Alerts</h4>
                                <p className="text-xs text-muted-foreground">Inquiries, consultations, and resume submissions.</p>
                                <Switch defaultChecked className="mx-auto" />
                            </div>
                            <div className="space-y-4 text-center p-6 rounded-xl bg-muted/10 border border-white/5 group hover:border-accent/30 transition-colors">
                                <Bell className="w-8 h-8 mx-auto text-orange-500 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold">System Alerts</h4>
                                <p className="text-xs text-muted-foreground">Maintenance notifications and critical updates.</p>
                                <Switch defaultChecked className="mx-auto" />
                            </div>
                            <div className="space-y-4 text-center p-6 rounded-xl bg-muted/10 border border-white/5 group hover:border-accent/30 transition-colors">
                                <Globe className="w-8 h-8 mx-auto text-green-500 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold">Web Push</h4>
                                <p className="text-xs text-muted-foreground">Real-time notifications while the dashboard is open.</p>
                                <Switch className="mx-auto" />
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Button onClick={handleSave} className="bg-accent hover:bg-accent/90 text-white min-w-[150px]">
                                <Save className="mr-2 w-4 h-4" /> Save Changes
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Settings;
