export interface Game {
    id: number;
    GameName: string;
    image: string;
    trending: boolean;
}
export interface Game_card {
    trending: boolean;
    GameName: string;
    image: string;
    count?: number; 
}