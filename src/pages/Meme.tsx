import React from 'react';

const Meme = () => {
    const [imageUrl, setImageUrl] = React.useState<string>('');
	const [memeImage,setMemeImage] = React.useState<HTMLImageElement |null>(null);
	const [imageObj, setImageObj] = React.useState<File | null>(null);
	const canvasRef = React.useRef<HTMLCanvasElement>(null);
	React.useEffect(() => {
        const image = new Image()
		image.onload = () => {
			image.src = imageUrl;
            image.onload=()=>setMemeImage(image)
		};
		// image.setAttribute('style', 'object-fit:contain');
	},[imageUrl,imageObj])
	React.useEffect(() => {
		if (memeImage && imageUrl) {
			const ctx = canvasRef.current?.getContext('2d');
			ctx!.fillStyle = 'black';
			ctx?.fillRect(0, 0, 400, 256 + 80);
			ctx?.drawImage(memeImage, (400 - 256) / 2, 500);
		}
	}, [canvasRef, memeImage,imageUrl]);
	React.useEffect(() => {
		if (imageObj) {
			setImageUrl(URL.createObjectURL(imageObj));
		}
	}, [imageObj]);
    
	return (
		<div className='p-6'>
			{/* <label htmlFor='file' className='p-4'>
				Select a file
			</label> */}
			<input
				type='file'
				// hidden
				id='file'
				onChange={(e) => {
					e.preventDefault();
					setImageObj(e.target.files![0]);
				}}
			/>
			<canvas width={500} height={406 + 80} ref={canvasRef}></canvas>
            {/* {<memeImage/>} */}
			{/* {imageUrl && (
				<img
					ref={imageRef}
					src={imageUrl}
					alt=''
					style={{ width: 400, height: 400, objectFit: 'contain' }}
				/>
			)} */}
		</div>
	);
};

export default Meme;
