import { Album } from "@jocelinofernandes/hl-dtos";
import { AlbumRepository } from "../repositories/album.repo";

export class AlbumRepositoryImpl implements AlbumRepository {
    model: AlbumRepository
    constructor(model: AlbumRepository) {
        this.model = model
    }
    async getAlbum(albumId: string): Promise<Album|null> {
        return this.model.getAlbum(albumId)
    }
    async addAlbum(album: Album): Promise<void> {
        return this.model.addAlbum(album)
    }
    async deleteAlbum(albumId: any): Promise<void> {
        return this.model.deleteAlbum(albumId)
    }
    async updateAlbum(album: Album): Promise<void> {
        return this.model.updateAlbum(album)
    }
    async getAlbums(query: string | undefined): Promise<Album[]> {
        return this.model.getAlbums(query)
    }
}