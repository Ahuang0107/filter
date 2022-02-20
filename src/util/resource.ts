import {RESOURCE_URL} from "./request";

export function getThumbnailImage(id: bigint): string {
    return RESOURCE_URL + `thumbnail/${id}.jpg`
}

export function getOriginImage(name: string): string {
    return RESOURCE_URL + `origin/${name}.jpg`
}

export function getAvatarImage(id: number): string {
    return RESOURCE_URL + `avatar/${id}.jpg`
}
