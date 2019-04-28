function makeText(text){
return {
    "type": "text",
    "text": text
  }
}
module.exports = {
    greeting(){
        return makeText("Halo kak, perkenalkan aku Reco sebagai asisten investasi saham kakak ☺, ada yang bisa Reco bantu ?")
    },
    bukaMenu(){
        return makeText("Ketik 'menu' aja ya kak di kolom pesan, kalo butuh bantuan aku")
    },
    pesanMenu(){
        return makeText("Berikut adalah beberapa fitur dari Sahamendasi yang bisa teman-teman pakai")
    },
    gagalRequest(){
        return makeText("Request gagal, keyword salah")
    },
    bantuanSaham(){
        return makeText("Untuk melakukan pencarian rekomendasi saham tertentu, anda dapat mengetikkan\nsaham <nama perusahaan>\nContoh :\nsaham BBCA\n\nTerima kasih")
    },
    bantuanBerita(){
        return makeText("Untuk melakukan pencarian analisis sentimen pada pemilik saham tertentu, anda dapat mengetikkan\nberita <nama perusahaan>\nContoh :\nberita BBCA\n\nTerima kasih")
    }
}