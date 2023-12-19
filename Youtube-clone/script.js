let API_KEY="AIzaSyBux2N6D0sHgxZwgQ66qyb_QRE8nC5ZXs8"
let video_http="https://www.googleapis.com/youtube/v3/videos?"
let channel_http="https://www.googleapis.com/youtube/v3/channels?"
fetch(video_http+new URLSearchParams({
    key:API_KEY,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
    

})).then(res=>res.json())
.then(data=>{
    // console.log(data)

    data.items.forEach(item => {
        getChannelIcon(item)
        
    });



})



const getChannelIcon=(video_data)=>{
    // console.log(video_data)
    fetch(channel_http+new URLSearchParams({
       key:API_KEY,
       part:"snippet",
       id:video_data.snippet.channelId,
    })).then(res=>res.json()).then(data=>{
        // console.log(data)
        video_data.channelThumbnail= data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data)
    })

}
const videoCardContainer = document.querySelector('.video-container');


const makeVideoCard=(data)=>{
    console.log(data)
    
    videoCardContainer.innerHTML+=`<div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
    <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
    <div class="content">
        <img src="${data.channelThumbnail}" class="channel-icon" alt="">
        <div class="info">
            <h4 class="title">${data.snippet.title}</h4>
            <p class="channel-name">${data.snippet.channelTitle}</p>
        </div>
    </div>
</div>`
    


}

 