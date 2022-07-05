import SLoader from 'components/SLoader'
import React from 'react'

const Meme = () => {
	const canvasRef = React.useRef<HTMLCanvasElement>(null)
	const [catImage, setCatImage] = React.useState<any>(null)

	React.useEffect(() => {
		const image = new Image()
		image.src = 'https://thiscatdoesnotexist.com'
		image.onload = () => setCatImage(image)
	}, [])

	React.useEffect(() => {
		if (catImage && canvasRef) {
			const ctx = canvasRef.current!.getContext('2d')!
			ctx.fillStyle = 'black'
			ctx.fillRect(0, 0, 400, 256 + 80)
			ctx.drawImage(catImage, 0, 40, 400, 256)
		}

	}, [catImage, canvasRef])

	return (!(catImage) ? (<div className='w-full flex items-center justify-center py-6'>
		<SLoader />
	</div>) :
		(<div className='w-full flex justify-center py-8'>
			<canvas ref={canvasRef} width={400} height={256 + 80}></canvas>
		</div>)
	)
}

export default Meme