export const transformToSlug = (titleToTransform: string) => {
    if(titleToTransform) return  titleToTransform.split(" ").join("-").toLowerCase();
}