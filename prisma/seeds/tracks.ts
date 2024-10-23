import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function track() {
  const tracks = [
    {
      id: 1,
      artist_id: 3,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e0220e8e67aab2c9321058c262a",
      name: "Em Của Ngày Hôm Qua",
      popularity: 200,
      color_bg: "rgb(160, 112, 112)",
      type: "track",
      slug: "em-cua-ngay-hom-qua",
      track_url:
        "https://ia600304.us.archive.org/26/items/em-cua-ngay-hom-qua/Em%20C%E1%BB%A7a%20Ng%C3%A0y%20H%C3%B4m%20Qua.mp3",
      create_at: "2024-10-12 07:29:17",
      update_at: "2024-10-12 07:29:17",
    },
    {
      id: 2,
      artist_id: 4,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02633a2d775747bccfbcb17a45",
      name: "We Don't Talk Anymore",
      popularity: 100,
      color_bg: "rgb(56, 80, 16)",
      type: "track",
      slug: "we-dont-talk-anymore",
      track_url:
        "https://ia600201.us.archive.org/13/items/charlie-puth-we-dont-talk-anymore-2111/Charlie%20Puth%20-%20We%20Don%27t%20Talk%20Anymore%20%28feat.%20Selena%20Gomez%29%20%5BOfficial%20Video%5D.mp3",
      create_at: "2024-10-12 07:31:02",
      update_at: "2024-10-12 07:31:02",
    },
    {
      id: 3,
      artist_id: 5,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e0252b2a3824413eefe9e33817a",
      name: "Blank Spac",
      popularity: 100,
      color_bg: "rgb(56, 64, 80)",
      type: "track",
      slug: "blank-space",
      track_url:
        "https://ia600307.us.archive.org/17/items/blank-space_202404/Taylor%20Swift%20-%20Blank%20Space.mp3",
      create_at: "2024-10-12 07:32:47",
      update_at: "2024-10-12 07:32:47",
    },
    {
      id: 4,
      artist_id: 4,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273897f73256b9128a9d70eaf66",
      name: "Attention",
      popularity: 180,
      color_bg: "rgb(192, 48, 40)",
      type: "track",
      slug: "attention",
      track_url:
        "https://ia600308.us.archive.org/6/items/attention-222/Charlie%20Puth%20-%20Attention%20%5BOfficial%20Video%5D.mp3",
      create_at: "2024-10-12 07:34:32",
      update_at: "2024-10-12 07:34:32",
    },
    {
      id: 5,
      artist_id: 4,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02633a2d775747bccfbcb17a45",
      name: "One Call Away",
      popularity: 100,
      color_bg: "rgb(56, 80, 16)",
      type: "track",
      slug: "one-call-away",
      track_url:
        "https://ia600309.us.archive.org/24/items/charlie-puth-one-call-away-233/Charlie%20Puth%20-%20One%20Call%20Away%20%5BOfficial%20Video%5D.mp3",
      create_at: "2024-10-12 07:36:17",
      update_at: "2024-10-12 07:36:17",
    },
    {
      id: 6,
      artist_id: 5,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a",
      name: "Shake It Off",
      popularity: 70,
      color_bg: "rgb(56, 64, 80)",
      type: "track",
      slug: "shake-it-off",
      track_url:
        "https://ia600202.us.archive.org/32/items/shake-it-off_202404/Taylor%20Swift%20-%20Shake%20It%20Off.mp3",
      create_at: "2024-10-12 07:38:02",
      update_at: "2024-10-12 07:38:02",
    },
    {
      id: 7,
      artist_id: 5,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a",
      name: "Bad blood",
      popularity: 90,
      color_bg: "rgb(200, 184, 152)",
      type: "track",
      slug: "bad-blood",
      track_url:
        "https://ia600309.us.archive.org/16/items/bad-blood_202404/Taylor%20Swift%20-%20Bad%20Blood%20ft.%20Kendrick%20Lamar.mp3",
      create_at: "2024-10-12 07:39:47",
      update_at: "2024-10-12 07:39:47",
    },
    {
      id: 8,
      artist_id: 5,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02a48964b5d9a3d6968ae3e0de",
      name: "You Belong With Me (Taylor’s Version)",
      popularity: 120,
      color_bg: "rgb(216, 184, 128)",
      type: "track",
      slug: "you-belong-with-me",
      track_url:
        "https://ia800206.us.archive.org/20/items/you-belong-with-me_202404/Taylor%20Swift%20-%20You%20Belong%20With%20Me.mp3",
      create_at: "2024-10-12 07:41:32",
      update_at: "2024-10-12 07:41:32",
    },
    {
      id: 9,
      artist_id: 7,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02def7146ca744f3b1bf838404",
      name: "Céline Dion",
      popularity: 60,
      color_bg: "rgb(208, 184, 128)",
      type: "track",
      slug: "celine-dion",
      track_url:
        "https://ia600207.us.archive.org/31/items/my-heart-will-go-on_2345/C%C3%A9line%20Dion%20-%20My%20Heart%20Will%20Go%20On%20%28Taking%20Chances%20World%20Tour-%20The%20Concert%29.mp3",
      create_at: "2024-10-12 07:43:17",
      update_at: "2024-10-12 07:43:17",
    },
    {
      id: 10,
      artist_id: 4,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e024e5df11b17b2727da2b718d8",
      name: "See you again",
      popularity: 160,
      color_bg: "rgb(83, 83, 83)",
      type: "track",
      slug: "see-you-again",
      track_url:
        "https://ia600302.us.archive.org/18/items/see-you-again_202404/Wiz%20Khalifa%20-%20See%20You%20Again%20ft.%20Charlie%20Puth%20%5BOfficial%20Video%5D%20Furious%207%20Soundtrack.mp3",
      create_at: "2024-10-12 07:45:02",
      update_at: "2024-10-12 07:45:02",
    },
    {
      id: 11,
      artist_id: 8,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b2731d78472931a3c47d66444ee4",
      name: "You Raise Me Up",
      popularity: 90,
      color_bg: "rgb(144, 96, 16)",
      type: "track",
      slug: "you-raise-me-up",
      track_url:
        "https://ia600303.us.archive.org/21/items/you-raise-me-up_202404/Westlife%20-%20You%20Raise%20Me%20Up%20%28Official%20Video%29.mp3",
      create_at: "2024-10-12 07:46:47",
      update_at: "2024-10-12 07:46:47",
    },
    {
      id: 12,
      artist_id: 9,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273e71efa8c6cfc1f8b39b0bdab",
      name: "Nothing's Gonna Change My Love for You",
      popularity: 80,
      color_bg: "rgb(128, 136, 192)",
      type: "track",
      slug: "nothing's-gonna-change-my-love-for-you",
      track_url:
        "https://ia600200.us.archive.org/1/items/nothings-gonna-change-my-love-for-you_202404/Westlife%20-%20Nothing%27s%20Gonna%20Change%20My%20Love%20For%20You%20%28Lyrics%29.mp3",
      create_at: "2024-10-12 07:48:32",
      update_at: "2024-10-12 07:48:32",
    },
    {
      id: 13,
      artist_id: 10,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
      name: "Perfect",
      popularity: 140,
      color_bg: "rgb(48, 184, 216)",
      type: "track",
      slug: "perfect",
      track_url:
        "https://ia600307.us.archive.org/23/items/perfect_202404/Ed%20Sheeran%20-%20Perfect%20%28Official%20Music%20Video%29.mp3",
      create_at: "2024-10-12 07:50:17",
      update_at: "2024-10-12 07:50:17",
    },
    {
      id: 14,
      artist_id: 3,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02af31997b23b7e6e65de1816b",
      name: "Không Phải Dạng Vừa Đâu",
      popularity: 160,
      color_bg: "rgb(176, 64, 72)",
      type: "track",
      slug: "khong-phai-dang-vua-da",
      track_url:
        "https://ia800304.us.archive.org/26/items/em-cua-ngay-hom-qua/Kh%C3%B4ng%20Ph%E1%BA%A3i%20D%E1%BA%A1ng%20V%E1%BB%ABa%20%C4%90%C3%A2u.mp3",
      create_at: "2024-10-12 07:52:02",
      update_at: "2024-10-12 07:52:02",
    },
    {
      id: 15,
      artist_id: 3,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e0206a4d1fd269dc47911d37eb3",
      name: "Nắng Ấm Xa Dần",
      popularity: 120,
      color_bg: "nang-am-xa-dan",
      type: "track",
      slug: "nang-am-xa-dan",
      track_url:
        "https://ia600304.us.archive.org/26/items/em-cua-ngay-hom-qua/N%E1%BA%AFng%20%E1%BA%A4m%20Xa%20D%E1%BA%A7n%20-%20S%C6%A1n%20T%C3%B9ng%20M-TP.mp3",
      create_at: "2024-10-12 07:53:47",
      update_at: "2024-10-12 07:53:47",
    },
    {
      id: 16,
      artist_id: 11,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02636bd3e9f31e1ea1e7bb389e",
      name: "Đã Lỡ Yêu Em Nhiều",
      popularity: 110,
      color_bg: "rgb(24, 184, 184)",
      type: "track",
      slug: "da-lo-yeu-em-nhieu",
      track_url:
        "https://ia800304.us.archive.org/26/items/em-cua-ngay-hom-qua/JustaTee%20-%20%C4%90%C3%A3%20L%E1%BB%A1%20Y%C3%AAu%20Em%20Nhi%E1%BB%81u%20%28Official%20MV%29.mp3",
      create_at: "2024-10-12 07:55:32",
      update_at: "2024-10-12 07:55:32",
    },
    {
      id: 17,
      artist_id: 18,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273bffc14adc7cc41fbb03bbaa8",
      name: "Vì Yêu Cứ Đâm Đầu",
      popularity: 130,
      color_bg: "rgb(128, 80, 72)",
      type: "track",
      slug: "vi-yeu-cu-dam-dau",
      track_url:
        "https://ia600302.us.archive.org/31/items/spotify-song/MIN%20x%20%C4%90EN%20V%C3%82U%20x%20JUSTATEE%20-%20V%C3%8C%20Y%C3%8AU%20C%E1%BB%A8%20%C4%90%C3%82M%20%C4%90%E1%BA%A6U%20%28VYC%C4%90%C4%90%29%20-%20OFFICIAL%20MUSIC%20VIDEO.mp3",
      create_at: "2024-10-12 07:57:17",
      update_at: "2024-10-12 07:57:17",
    },
    {
      id: 18,
      artist_id: 18,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273674b39e6964b8b27986d7fd5",
      name: "Có Em Chờ",
      popularity: 100,
      color_bg: "rgb(216, 224, 224)",
      type: "track",
      slug: "co-em-cho",
      track_url:
        "https://ia800302.us.archive.org/31/items/spotify-song/MIN%20-%20C%C3%B3%20Em%20Ch%E1%BB%9D%20ft.%20Mr%20A%20%28Official%20MV%29.mp3",
      create_at: "2024-10-12 07:59:02",
      update_at: "2024-10-12 07:59:02",
    },
    {
      id: 19,
      artist_id: 1,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273a1bfb7eae80217d0f56986f3",
      name: "Nến Và Hoa",
      popularity: 120,
      color_bg: "rgb(248, 240, 32)",
      type: "track",
      slug: "nen-va-hoa",
      track_url:
        "https://ia800302.us.archive.org/31/items/spotify-song/Rhymastic%20-%20N%E1%BA%BFn%20V%C3%A0%20Hoa%20%28Official%20Audio%29.mp3",
      create_at: "2024-10-12 08:00:47",
      update_at: "2024-10-12 08:00:47",
    },
    {
      id: 20,
      artist_id: 1,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b2736155ced1250a059a256d3407",
      name: "Yêu 5",
      popularity: 100,
      color_bg: "rgb(232, 232, 232)",
      type: "track",
      slug: "yeu-5",
      track_url:
        "https://ia600302.us.archive.org/31/items/spotify-song/Y%C3%AAu%205.mp3",
      create_at: "2024-10-12 08:02:32",
      update_at: "2024-10-12 08:02:32",
    },
    {
      id: 21,
      artist_id: 13,
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273bc146f67374ea7e19c5d0c80",
      name: "Những Lời Hứa Bỏ Quên",
      popularity: 140,
      color_bg: "rgb(64, 32, 40)",
      type: "track",
      slug: "nhung-loi-hua-bo-quen",
      track_url:
        "https://ia600304.us.archive.org/26/items/em-cua-ngay-hom-qua/NH%E1%BB%AENG%20L%E1%BB%9CI%20H%E1%BB%A8A%20B%E1%BB%8E%20QU%C3%8AN%20-%20V%C5%A8.%20x%20DEAR%20JANE%20%28Official%20MV%29.mp3",
      create_at: "2024-10-12 08:04:17",
      update_at: "2024-10-12 08:04:17",
    },
    {
      id: 22,
      artist_id: 15,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e0287470a8014c00932cd36d841",
      name: "Sau Lời Từ Khước (Theme Song From 'MAI')",
      popularity: 150,
      color_bg: "rgb(40, 112, 152)",
      type: "track",
      slug: "sau-loi-tu-khuoc",
      track_url:
        "https://ia800304.us.archive.org/26/items/em-cua-ngay-hom-qua/Sau%20l%E1%BB%9Di%20t%E1%BB%AB%20kh%C6%B0%E1%BB%9Bc%20%28OST%20MAI%29%20-%20Phan%20M%E1%BA%A1nh%20Qu%E1%BB%B3nh%20-%20Lyrics%20video.mp3",
      create_at: "2024-10-12 08:06:02",
      update_at: "2024-10-12 08:06:02",
    },
    {
      id: 23,
      artist_id: 14,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02bf7d3058bc206639f626da8b",
      name: "Tháng Tư Là Lời Nói Dối Của Em",
      popularity: 110,
      color_bg: "rgb(120, 0, 32)",
      type: "track",
      slug: "thang-tu-la-loi-noi-doi-cua-em",
      track_url:
        "https://ia600304.us.archive.org/26/items/em-cua-ngay-hom-qua/Th%C3%A1ng%20T%C6%B0%20L%C3%A0%20L%E1%BB%9Di%20N%E1%BB%91i%20D%E1%BB%91i%20C%E1%BB%A7a%20Em%20%5BOfficial%20Lyric%20Video%5D%20-%20H%C3%A0%20Anh%20Tu%E1%BA%A5n.mp3",
      create_at: "2024-10-12 08:07:47",
      update_at: "2024-10-12 08:07:47",
    },
    {
      id: 24,
      artist_id: 16,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02501e021bc6b314f504e78bbd",
      name: "Đếm Ngày Xa Em",
      popularity: 200,
      color_bg: "rgb(144, 152, 184)",
      type: "track",
      slug: "dem-ngay-xa-em",
      track_url:
        "https://ia800304.us.archive.org/26/items/em-cua-ngay-hom-qua/%C4%90%E1%BA%BFm%20Ng%C3%A0y%20Xa%20Em%20-%20Only%20C%20ft.%20Lou%20Ho%C3%A0ng%20-%20Official%20MV%20-%20Nh%E1%BA%A1c%20tr%E1%BA%BB%20m%E1%BB%9Bi%20hay%20tuy%E1%BB%83n%20ch%E1%BB%8Dn.mp3",
      create_at: "2024-10-12 08:09:32",
      update_at: "2024-10-12 08:09:32",
    },
    {
      id: 25,
      artist_id: 17,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e022103bdcdf1d4369f212b6862",
      name: "Hit Me Up (feat. Nomovodka)",
      popularity: 180,
      color_bg: "rgb(232, 160, 168)",
      type: "track",
      slug: "hit-me-up",
      track_url:
        "https://ia800302.us.archive.org/31/items/spotify-song/BINZ%20-%20HIT%20ME%20UP%20%28ft.%20NOMOVODKA%29%20-%20OFFICIAL%20MV.mp",
      create_at: "2024-10-12 08:11:17",
      update_at: "2024-10-12 08:11:17",
    },
    {
      id: 26,
      artist_id: 2,
      thumbnail:
        "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848b3ed62757dc710d8054d3b8",
      name: "3107 1-2-3-4-5-6-7-8 (NEW)",
      popularity: 140,
      color_bg: "rgb(40, 40, 136)",
      type: "track",
      slug: "3107-1-2-3-4-5-6-7-8",
      track_url:
        "https://ia800302.us.archive.org/31/items/spotify-song/W-n%20-%203107%20full%20album-%20ft.%20%28%20267%2C%20N%C3%A2u%20%2CD%C6%B0%C6%A1ngg%20%29.mp3",
      create_at: "2024-10-12 08:13:02",
      update_at: "2024-10-12 08:13:02",
    },
    {
      id: 27,
      artist_id: 2,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02dc031e2429585e32b4ccb69b",
      name: "id 072019",
      popularity: 190,
      color_bg: "rgb(56, 80, 96)",
      type: "track",
      slug: "id-072019",
      track_url:
        "https://ia800302.us.archive.org/31/items/spotify-song/W-n%20-%20id%20072019%20-%203107%20ft%20267.mp3",
      create_at: "2024-10-12 08:14:47",
      update_at: "2024-10-12 08:14:47",
    },
    {
      id: 28,
      artist_id: 6,
      thumbnail:
        "https://i.scdn.co/image/ab67616d00001e02c6f7af36ecdc3ed6e0a1f169",
      name: "Dance monkey",
      popularity: 160,
      color_bg: "rgb(8, 48, 64)",
      type: "track",
      slug: "dance-monkey",
      track_url:
        "https://ia600204.us.archive.org/27/items/dance-monkey_202404/TONES%20AND%20I%20-%20DANCE%20MONKEY%20%28OFFICIAL%20VIDEO%29.mp3",
      create_at: "2024-10-12 08:16:32",
      update_at: "2024-10-12 08:16:32",
    },
  ];

  tracks.forEach(async (track) => {
    await prisma.tracks.create({
      data: {
        id: track.id,
        artist_id: track.artist_id,
        thumbnail: track.thumbnail,
        name: track.name,
        popularity: track.popularity,
        color_bg: track.color_bg,
        type: track.type,
        slug: track.slug,
        track_url: track.track_url,
        create_at: track.create_at,
        update_at: track.update_at,
      },
    });
  });
}