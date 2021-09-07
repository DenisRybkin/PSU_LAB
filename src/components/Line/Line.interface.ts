export interface LineInterface {
    tag : 'h1'| 'h2'| 'h3' |'h5'| 'span'| 'li'| 'footer',
    className ?: string,
    children ?: string,
    type : string,
    color : string,
}