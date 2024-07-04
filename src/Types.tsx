export interface Color {
  id: number;
  name: string;
  hex_code: string;
  color_code: string;
}

// Interface for the entire API response
export interface Data {
  success: boolean;
  colors: Color[];
}
