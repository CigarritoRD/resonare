export const transformToSlug = titleToTransform => {
    if(titleToTransform) return  titleToTransform.split(" ").join("-").toLowerCase();
}