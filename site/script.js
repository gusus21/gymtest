const links = document.getElementsByClassName("link")

		Array.from(links).forEach(link => {
			link.addEventListener("click", playAudio, false)
		})
		
		function playAudio() {
			const audio = document.getElementById("audio")
			audio.muted = false;
			audio.play();	
		}

		function playMusic(){
			const audio = document.getElementById("music");
			audio.muted = false;
			audio.play();
		}
		function showMusic(){
			if(document.getElementById("musicList").style.visibility=="hidden")
			document.getElementById("musicList").style.visibility="visible";
			else
			document.getElementById("musicList").style.visibility="hidden"
		}
		function demonstrate(){
			document.getElementById("image").style.visibility = "initial";
		}

		// function changeBackground(){
		// 	document.body.style.backgroundImage = "url('http://c.tenor.com/aBs-tJmtyQAAAAAC/gachimuchi-billy-herrington.gif')";
		// 	document.body.style.backgroundSize = "100%";
		// }
		
		let loadTime;

		function buttonVisible(){
			loadTime = setTimeout(demonstrate, 8000);
		}
		function collapsedMenuShow(){
			if(document.getElementById("collapse").style.visibility=="hidden")
			document.getElementById("collapse").style.visibility="visible";
			else
			document.getElementById("collapse").style.visibility="hidden"
		}
        function loopedBackground(){
            var images = [
                "https://c.tenor.com/6V1ooQVn3CQAAAAd/gachi-fist.gif",
                "http://c.tenor.com/aBs-tJmtyQAAAAAC/gachimuchi-billy-herrington.gif"
            ];
            let count = 1;
            change=()=>{
                document.body.style.backgroundImage = "url("+images[count]+")";
                count = (count + 1) % images.length;
            }
            setInterval(change, 8000);
        } 
        