import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://abwaaccagpzkegfneltn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFid2FhY2NhZ3B6a2VnZm5lbHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwOTg3NTAsImV4cCI6MjAxNDY3NDc1MH0.ljQo0TAl_cXJuMjPiwsGRMOTuxbPMS8GizUvkXS7onU"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;