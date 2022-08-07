export type Orders = {
  id: string;
  patrimony: string;
  description: string;
  status: string;
  created_at: Date;
};

export type NewOrder = {
  patrimony: string;
  description: string;
};

export type StatusOrder = 'open' | 'closed';
