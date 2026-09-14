CREATE TABLE public.shared_platform_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pillar TEXT NOT NULL CHECK (pillar IN ('Hierarchy', 'User workflow', 'Analytics engine')),
  capability TEXT NOT NULL,
  owner TEXT NOT NULL DEFAULT 'Unassigned',
  status TEXT NOT NULL DEFAULT 'Planned' CHECK (status IN ('Planned', 'In progress', 'At risk', 'Complete')),
  target_period TEXT NOT NULL DEFAULT '2027 H1',
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  note TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.shared_platform_progress TO anon;
GRANT SELECT, INSERT, UPDATE ON public.shared_platform_progress TO authenticated;
GRANT ALL ON public.shared_platform_progress TO service_role;
ALTER TABLE public.shared_platform_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view shared platform progress"
ON public.shared_platform_progress FOR SELECT
TO anon, authenticated
USING (true);
CREATE POLICY "Team can add shared platform progress"
ON public.shared_platform_progress FOR INSERT
TO anon, authenticated
WITH CHECK (true);
CREATE POLICY "Team can update shared platform progress"
ON public.shared_platform_progress FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);
CREATE INDEX shared_platform_progress_pillar_sort_idx
ON public.shared_platform_progress (pillar, sort_order);
CREATE OR REPLACE FUNCTION public.set_shared_platform_progress_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
CREATE TRIGGER set_shared_platform_progress_updated_at
BEFORE UPDATE ON public.shared_platform_progress
FOR EACH ROW EXECUTE FUNCTION public.set_shared_platform_progress_updated_at();