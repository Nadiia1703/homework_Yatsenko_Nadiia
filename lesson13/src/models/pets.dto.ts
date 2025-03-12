
export interface PetDto {
    id: number;
    category: CategoryDto;
    name: string;
    photoUrls: string[];
    tags: TagDto[];
    status: string;
}

export interface CategoryDto {
    id: number;
    name: string;
}
export interface TagDto {
    id: number;
    name: string;
}
