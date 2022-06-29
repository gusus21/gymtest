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
                { link: "../images/gachi-fist.gif", length: 8000 },
                { link: "../images/gachimuchi-billy-herrington.gif", length: 6600 }
            ];
            let num = 0;
			let buf;
            change = () => {
				let oldNum = num;
				num = (num + 1) % images.length;
				buf = images[num].link + "?a=" + Math.random();//to avoid using cached GIF
				setTimeout(() => {//to start loading beforehand
        			document.getElementById("kostyl").style.backgroundImage = "url(" + buf + ")";
				}, images[oldNum].length - 250);
				setTimeout(() => {
        			document.body.style.backgroundImage = "url(" + buf + ")";
					change();
				}, images[oldNum].length);
            }
			change();
        }