import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trash2, Search, Linkedin, Twitter } from "lucide-react";
import { CreateTeamMemberDialog } from "./CreateTeamMemberDialog";

const TeamManagement = () => {
    // Start with empty list as requested, or maybe one example
    const [members, setMembers] = useState<any[]>([]);

    const handleAddMember = (newMemberData: any) => {
        const newMember = {
            id: Date.now(), // Simple unique ID
            ...newMemberData
        };
        setMembers([newMember, ...members]);
    };

    const handleDeleteMember = (id: number) => {
        setMembers(members.filter(m => m.id !== id));
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
                    <p className="text-muted-foreground">Manage your team members and their roles.</p>
                </div>
                <CreateTeamMemberDialog onMemberAdded={handleAddMember} />
            </div>

            <Card className="glass">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Team Members</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                placeholder="Search members..."
                                className="w-full rounded-md border border-input bg-background/50 pl-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {members.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                            No team members found. Add one to get started.
                        </div>
                    ) : (
                        <div className="rounded-md border border-border/50">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-muted/50 text-muted-foreground">
                                    <tr>
                                        <th className="p-4 font-medium">Member</th>
                                        <th className="p-4 font-medium">Role</th>
                                        <th className="p-4 font-medium hidden md:table-cell">Bio</th>
                                        <th className="p-4 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.map((member) => (
                                        <tr key={member.id} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                                            <td className="p-4 flex items-center gap-3">
                                                <Avatar>
                                                    <AvatarImage src={member.image} />
                                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div className="font-medium">{member.name}</div>
                                            </td>
                                            <td className="p-4 text-muted-foreground">{member.role}</td>
                                            <td className="p-4 text-muted-foreground max-w-xs truncate hidden md:table-cell">
                                                {member.bio}
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    {member.linkedin && (
                                                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-blue-500">
                                                            <Linkedin className="h-4 w-4" />
                                                        </a>
                                                    )}
                                                    {member.twitter && (
                                                        <a href={member.twitter} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-blue-400">
                                                            <Twitter className="h-4 w-4" />
                                                        </a>
                                                    )}
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 hover:text-red-500"
                                                        onClick={() => handleDeleteMember(member.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default TeamManagement;
