import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tjecicmklivincbectkq.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZWNpY21rbGl2aW5jYmVjdGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNjI4NTEsImV4cCI6MjAzOTczODg1MX0.52x4B3qqtWvIzs5YmpIWYuGNa7L6GQyPHQ8RjZc_MYY';

export const supabase = createClient(supabaseUrl, supabaseKey);
