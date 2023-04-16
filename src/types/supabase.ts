// yarn supabase gen types typescript --project-id "bqulwtulzyvyritzkvdm" --schema public --debug > types/supabase.ts

export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export interface Database {
	public: {
		Tables: {
			recipes: {
				Row: {
					author: string | null;
					content: string;
					created_at: string;
					description: string | null;
					recipe_id: string;
					title: string;
					updated_at: string;
				};
				Insert: {
					author?: string | null;
					content: string;
					created_at?: string;
					description?: string | null;
					recipe_id?: string;
					title: string;
					updated_at?: string;
				};
				Update: {
					author?: string | null;
					content?: string;
					created_at?: string;
					description?: string | null;
					recipe_id?: string;
					title?: string;
					updated_at?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
