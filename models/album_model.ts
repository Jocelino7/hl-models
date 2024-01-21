import { Album } from "@jocelinofernandes/hl-dtos";
import { AlbumRepository } from "../repositories/album.repo";

export class AlbumModel implements AlbumRepository {
    getAlbum(albumId: string): Promise<Album> {
        throw new Error("Method not implemented.");
    }
    async addAlbum(album: Album): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteAlbum(albumId: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updateAlbum(album: Album): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAlbums(query: string | undefined): Promise<Album[]> {
        throw new Error("Method not implemented.");
    }

}