export interface FavoriteDto {
    id: string;
    user_id: string;
    image_id: string;
    sub_id: string;
    created_at: string;
    image: ImageInfoDto[];

}

export interface ImageInfoDto {
    id: string;
    url: string;
}
