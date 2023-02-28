export const toDateTime = (secs: number) => {
    const t = new Date(Date.UTC(1970, 0, 1))
    t.setUTCSeconds(secs)
    return t
}
