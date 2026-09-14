import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  CircleDashed,
  GitBranch,
  Network,
  Pencil,
  Plus,
  RefreshCw,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type ProgressItem = Tables<"shared_platform_progress">;
type Pillar = "Hierarchy" | "User workflow" | "Analytics engine";
type Status = "Planned" | "In progress" | "At risk" | "Complete";

const pillars: Array<{ name: Pillar; icon: typeof Network; promise: string }> = [
  { name: "Hierarchy", icon: Network, promise: "Organise once, inherit everywhere." },
  { name: "User workflow", icon: GitBranch, promise: "Configure, collect, review and act once." },
  { name: "Analytics engine", icon: BarChart3, promise: "Turn governed data into decisions." },
];

const statuses: Status[] = ["Planned", "In progress", "At risk", "Complete"];
const targetPeriods = ["2026 Q3", "2026 Q4", "2027 H1", "2027 H2", "2028 Direction"];
const emptyForm: TablesInsert<"shared_platform_progress"> = {
  pillar: "Hierarchy",
  capability: "",
  owner: "Unassigned",
  status: "Planned",
  target_period: "2027 H1",
  progress: 0,
  note: "",
  sort_order: 99,
};

const statusStyle: Record<Status, string> = {
  Planned: "border border-border bg-background text-foreground",
  "In progress": "bg-primary/10 text-primary",
  "At risk": "bg-destructive/10 text-destructive",
  Complete: "bg-accent/15 text-accent",
};

const SharedPlatform = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [pillarFilter, setPillarFilter] = useState<"All" | Pillar>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | Status>("All");
  const [editing, setEditing] = useState<ProgressItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState<TablesInsert<"shared_platform_progress">>(emptyForm);

  const { data: items = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["shared-platform-progress"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("shared_platform_progress")
        .select("*")
        .order("pillar")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (editing) {
        const changes: TablesUpdate<"shared_platform_progress"> = {
          pillar: form.pillar,
          capability: form.capability,
          owner: form.owner,
          status: form.status,
          target_period: form.target_period,
          progress: form.progress,
          note: form.note,
        };
        const { error } = await supabase.from("shared_platform_progress").update(changes).eq("id", editing.id);
        if (error) throw error;
        return;
      }
      const { error } = await supabase.from("shared_platform_progress").insert(form);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shared-platform-progress"] });
      setEditing(null);
      setIsAdding(false);
      setForm(emptyForm);
      toast({ title: "Progress saved", description: "The dashboard now reflects the latest update." });
    },
    onError: () => toast({ title: "Could not save", description: "Please try the update again.", variant: "destructive" }),
  });

  const filteredItems = useMemo(
    () => items.filter((item) => (pillarFilter === "All" || item.pillar === pillarFilter) && (statusFilter === "All" || item.status === statusFilter)),
    [items, pillarFilter, statusFilter],
  );
  const overallProgress = items.length ? Math.round(items.reduce((sum, item) => sum + item.progress, 0) / items.length) : 0;
  const completed = items.filter((item) => item.status === "Complete").length;
  const atRisk = items.filter((item) => item.status === "At risk").length;
  const recentlyUpdated = items.filter((item) => item.progress > 0).length;

  const openEdit = (item: ProgressItem) => {
    setEditing(item);
    setForm({
      pillar: item.pillar,
      capability: item.capability,
      owner: item.owner,
      status: item.status,
      target_period: item.target_period,
      progress: item.progress,
      note: item.note,
      sort_order: item.sort_order,
    });
  };

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm);
    setIsAdding(true);
  };

  const closeDialog = () => {
    setEditing(null);
    setIsAdding(false);
    setForm(emptyForm);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/competitor-matrix" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <ArrowLeft className="h-4 w-4" /> Roadmap gap matrix
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/data-governance" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-foreground hover:border-accent hover:text-accent">
                Data governance
              </Link>
              <Link to="/" className="text-xs font-medium text-muted-foreground hover:text-primary">Back to the deck</Link>
              <Button onClick={openAdd}><Plus /> Add capability</Button>
            </div>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">RA+ shared platform dashboard</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">Track the foundation every product depends on.</h1>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            A live view of delivery across hierarchy, user workflow and the analytics engine, with accountable owners, target periods and current risks.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Overall progress", value: `${overallProgress}%`, icon: BarChart3 },
            { label: "Capabilities updated", value: `${recentlyUpdated}/${items.length}`, icon: RefreshCw },
            { label: "Complete", value: String(completed), icon: CheckCircle2 },
            { label: "At risk", value: String(atRisk), icon: AlertTriangle },
          ].map((metric) => (
            <div key={metric.label} className="bg-card p-5">
              <div className="flex items-center justify-between text-muted-foreground"><span className="text-xs font-semibold uppercase tracking-[0.14em]">{metric.label}</span><metric.icon className="h-4 w-4" /></div>
              <p className="mt-3 text-3xl font-bold">{isLoading ? "…" : metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const pillarItems = items.filter((item) => item.pillar === pillar.name);
            const progress = pillarItems.length ? Math.round(pillarItems.reduce((sum, item) => sum + item.progress, 0) / pillarItems.length) : 0;
            const Icon = pillar.icon;
            return (
              <button key={pillar.name} type="button" onClick={() => setPillarFilter(pillar.name)} className="border-t-4 border-primary bg-card p-5 text-left shadow-sm transition-colors hover:bg-muted/40">
                <div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Shared foundation</p><h2 className="mt-2 text-xl font-bold">{pillar.name}</h2></div><Icon className="h-5 w-5 text-primary" /></div>
                <p className="mt-3 text-sm text-muted-foreground">{pillar.promise}</p>
                <div className="mt-5 flex items-center gap-3"><Progress value={progress} className="h-2" /><span className="w-10 text-right text-sm font-semibold">{progress}%</span></div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Delivery register</p><h2 className="mt-1 text-2xl font-bold">Platform capabilities</h2></div>
          <div className="flex flex-wrap gap-3">
            <Select value={pillarFilter} onValueChange={(value) => setPillarFilter(value as "All" | Pillar)}><SelectTrigger className="w-44"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="All">All pillars</SelectItem>{pillars.map((pillar) => <SelectItem key={pillar.name} value={pillar.name}>{pillar.name}</SelectItem>)}</SelectContent></Select>
            <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as "All" | Status)}><SelectTrigger className="w-40"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="All">All statuses</SelectItem>{statuses.map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}</SelectContent></Select>
          </div>
        </div>

        {isError ? (
          <div className="mt-6 flex items-center justify-between border border-destructive/30 bg-destructive/5 p-5"><p className="text-sm text-destructive">The progress register could not be loaded.</p><Button variant="outline" onClick={() => refetch()}><RefreshCw /> Retry</Button></div>
        ) : (
          <div className="mt-4 overflow-x-auto border border-border bg-card">
            <table className="w-full min-w-[980px] border-collapse text-left">
              <thead className="bg-muted/60 text-xs uppercase tracking-[0.12em] text-muted-foreground"><tr><th className="p-4">Capability</th><th className="p-4">Owner</th><th className="p-4">Target</th><th className="p-4">Status</th><th className="p-4">Progress</th><th className="w-14 p-4"><span className="sr-only">Edit</span></th></tr></thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id} className="border-t border-border align-top hover:bg-muted/30">
                    <td className="p-4"><p className="font-semibold">{item.capability}</p><p className="mt-1 text-xs font-medium text-accent">{item.pillar}</p>{item.note && <p className="mt-2 max-w-xl text-sm text-muted-foreground">{item.note}</p>}</td>
                    <td className="p-4 text-sm">{item.owner}</td><td className="p-4 text-sm font-medium">{item.target_period}</td>
                    <td className="p-4"><span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[item.status as Status] ?? statusStyle.Planned}`}>{item.status}</span></td>
                    <td className="p-4"><div className="flex min-w-36 items-center gap-3"><Progress value={item.progress} className="h-2" /><span className="w-9 text-right text-sm font-semibold">{item.progress}%</span></div></td>
                    <td className="p-3"><Button variant="ghost" size="icon" onClick={() => openEdit(item)} aria-label={`Edit ${item.capability}`}><Pencil /></Button></td>
                  </tr>
                ))}
                {!isLoading && filteredItems.length === 0 && <tr><td colSpan={6} className="p-10 text-center text-sm text-muted-foreground"><CircleDashed className="mx-auto mb-3 h-6 w-6" />No capabilities match these filters.</td></tr>}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Dialog open={Boolean(editing) || isAdding} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="max-w-2xl">
          <DialogHeader><DialogTitle>{editing ? "Update capability" : "Add capability"}</DialogTitle><DialogDescription>Keep the shared-platform delivery view current for leadership and product teams.</DialogDescription></DialogHeader>
          <div className="grid gap-4 py-2 sm:grid-cols-2">
            <label className="space-y-2 sm:col-span-2"><span className="text-sm font-medium">Capability</span><Input value={form.capability} onChange={(event) => setForm({ ...form, capability: event.target.value })} /></label>
            <label className="space-y-2"><span className="text-sm font-medium">Pillar</span><Select value={form.pillar} onValueChange={(value) => setForm({ ...form, pillar: value })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{pillars.map((pillar) => <SelectItem key={pillar.name} value={pillar.name}>{pillar.name}</SelectItem>)}</SelectContent></Select></label>
            <label className="space-y-2"><span className="text-sm font-medium">Owner</span><Input value={form.owner} onChange={(event) => setForm({ ...form, owner: event.target.value })} /></label>
            <label className="space-y-2"><span className="text-sm font-medium">Status</span><Select value={form.status} onValueChange={(value) => setForm({ ...form, status: value })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{statuses.map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}</SelectContent></Select></label>
            <label className="space-y-2"><span className="text-sm font-medium">Target period</span><Select value={form.target_period} onValueChange={(value) => setForm({ ...form, target_period: value })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{targetPeriods.map((period) => <SelectItem key={period} value={period}>{period}</SelectItem>)}</SelectContent></Select></label>
            <label className="space-y-2 sm:col-span-2"><span className="flex justify-between text-sm font-medium"><span>Progress</span><span>{form.progress}%</span></span><input className="w-full accent-primary" type="range" min="0" max="100" step="5" value={form.progress} onChange={(event) => setForm({ ...form, progress: Number(event.target.value) })} /></label>
            <label className="space-y-2 sm:col-span-2"><span className="text-sm font-medium">Latest update</span><Textarea value={form.note} onChange={(event) => setForm({ ...form, note: event.target.value })} /></label>
          </div>
          <DialogFooter><Button variant="outline" onClick={closeDialog}>Cancel</Button><Button onClick={() => saveMutation.mutate()} disabled={!form.capability.trim() || saveMutation.isPending}>{saveMutation.isPending ? "Saving…" : "Save progress"}</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default SharedPlatform;