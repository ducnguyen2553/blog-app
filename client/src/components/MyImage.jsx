import { IKImage } from "imagekitio-react"

const MyImage = ({ src, className, w, h, alt }) => {
    return (
        <>
            <IKImage className={className}
                urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                path={src}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                width={w}
                height={h}
                alt={alt}
                transformation={
                    [
                        {
                            width: w,
                            height: h
                        }
                    ]
                }
            />
        </>
    )
}
export default MyImage;