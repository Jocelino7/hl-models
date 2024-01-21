import { Album } from "@jocelinofernandes/hl-dtos";

export interface AlbumRepository {
    addAlbum(album: Album): Promise<void>
    deleteAlbum(albumId): Promise<void>
    updateAlbum(album: Album): Promise<void>
    getAlbums(query: string | undefined): Promise<Album[]>
    getAlbum(albumId: string): Promise<Album | null>
}