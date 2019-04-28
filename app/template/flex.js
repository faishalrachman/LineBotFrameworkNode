function positif(title, text) {
  return [
    {
      type: "text",
      text: title,
      size: "md",
      align: "start",
      gravity: "center",
      weight: "bold",
      color: "#000000"
    },
    {
      type: "text",
      text: text,
      margin: "md",
      weight: "bold",
      color: "#51FD00"
    }
  ];
}

function negatif(title, text) {
  return [
    {
      type: "text",
      text: title,
      size: "md",
      align: "start",
      gravity: "center",
      weight: "bold",
      color: "#000000"
    },
    {
      type: "text",
      text: text,
      margin: "md",
      weight: "bold",
      color: "#FF0000"
    }
  ];
}

function sentimenBerita(positif) {
  if (positif) {
    return {
      type: "text",
      text: "Positif",
      flex: 0,
      size: "md",
      align: "start",
      weight: "bold",
      color: "#51FD00"
    };
  }
  return {
    type: "text",
    text: "Negatif",
    flex: 0,
    size: "md",
    align: "start",
    weight: "bold",
    color: "#FF0000"
  };
}

module.exports = {
  rekomendasi(namaSaham, kelasBerita, technicalIndicator) {
    berita = negatif("Berita :", "Negatif");
    technical = negatif("Technical :", "Jual");
    rekomen = negatif("Rekomendasi :", "Jual");

    if (kelasBerita === "Positif") {
      berita = positif("Berita :", "Positif");
    }
    if (technicalIndicator === "Beli") {
      technical = positif("Technical :", "Beli");
    }

    if (technicalIndicator === "Beli" && kelasBerita === "Positif") {
      rekomen = positif("Rekomendasi :", "Beli");
    } else if (technicalIndicator === "Beli" && kelasBerita !== "Positif") {
      rekomen = positif("Rekomendasi :", "Beli");
    } else if (technicalIndicator !== "Beli" && kelasBerita === "Positif") {
      rekomen = negatif("Rekomendasi :", "Tahan/Beli");
    } else if (technicalIndicator !== "Beli" && kelasBerita !== "Positif") {
      rekomen = negatif("Rekomendasi :", "Jual");
    }

    return {
      type: "flex",
      altText: "Flex Message",
      contents: {
        type: "bubble",
        body: {
          type: "box",
          layout: "vertical",
          spacing: "md",
          action: {
            type: "uri",
            label: "Action",
            uri: "https://linecorp.com"
          },
          contents: [
            {
              type: "text",
              text: namaSaham,
              size: "xl",
              weight: "bold"
            },
            {
              type: "box",
              layout: "vertical",
              flex: 2,
              spacing: "xxl",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  flex: 2,
                  spacing: "xs",
                  margin: "sm",
                  contents: berita
                },
                {
                  type: "box",
                  layout: "horizontal",
                  flex: 2,
                  spacing: "xs",
                  margin: "sm",
                  contents: technical
                },
                {
                  type: "box",
                  layout: "horizontal",
                  flex: 2,
                  spacing: "xs",
                  margin: "sm",
                  contents: rekomen
                },
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "Lihat Grafik",
                    uri: "line://app/102"
                  },
                  flex: 2,
                  color: "#FFD700",
                  style: "secondary"
                }
              ]
            }
          ]
        },
        footer: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "spacer",
              size: "xxl"
            }
          ]
        }
      }
    };
  },
  menuUtama(baseURL) {
    return {
      type: "flex",
      altText: "Flex Message",
      contents: {
        type: "carousel",
        contents: [
          {
            type: "bubble",
            direction: "ltr",
            hero: {
              type: "image",
              url:
                "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
              size: "full",
              aspectRatio: "20:13",
              aspectMode: "cover"
            },
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "Berita Saham",
                  size: "xl",
                  weight: "bold"
                }
              ]
            },
            footer: {
              type: "box",
              layout: "vertical",
              flex: 1,
              spacing: "xs",
              margin: "xs",
              contents: [
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "Lihat Berita",
                    uri: baseURL + "home/news"
                  },
                  flex: 2,
                  color: "#FFD700",
                  margin: "none",
                  height: "sm",
                  style: "secondary"
                },
                {
                  type: "spacer",
                  size: "xs"
                }
              ]
            }
          },
          {
            type: "bubble",
            hero: {
              type: "image",
              url:
                "https://images.unsplash.com/photo-1501772529219-ed0014f5032c?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              size: "full",
              aspectRatio: "20:13",
              aspectMode: "cover"
            },
            body: {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Rekomendasi Saham",
                  size: "xl",
                  weight: "bold",
                  wrap: true
                }
              ]
            },
            footer: {
              type: "box",
              layout: "vertical",
              spacing: "xs",
              margin: "xs",
              contents: [
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "Lihat Berita",
                    uri: baseURL + "home/index"
                  },
                  color: "#FFD700",
                  style: "secondary"
                }
              ]
            }
          },
          {
            type: "bubble",
            hero: {
              type: "image",
              url:
                "https://images.unsplash.com/photo-1494888427482-242d32babc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
              size: "full",
              aspectRatio: "20:13",
              aspectMode: "cover"
            },
            body: {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Tutorial Belajar Investasi",
                  size: "xl",
                  weight: "bold",
                  wrap: true
                }
              ]
            },
            footer: {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              contents: [
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "Lihat Berita",
                    uri: baseURL + "home/tutorial"
                  },
                  flex: 2,
                  color: "#FFD700",
                  style: "secondary"
                }
              ]
            }
          }
        ]
      }
    };
  },
  getBerita(judul, positif, persen, link,tanggal) {
    return {
      type: "flex",
      altText: "Flex Message",
      contents: {
        type: "bubble",
        hero: {
          type: "image",
          url:
            "https://images.unsplash.com/photo-1518183214770-9cffbec72538?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover"
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "text",
              text: judul,
              margin: "xs",
              size: "xl",
              weight: "bold",
              wrap: true
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                sentimenBerita(positif),
                {
                  type: "text",
                  text: persen,
                  margin: "lg",
                  align: "start",
                  gravity: "top",
                  weight: "bold",
                  wrap: true
                },
                {
                  type: "spacer"
                }
              ]
            },

            {
              type: "text",
              text: tanggal
            }
          ]
        },
        footer: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "button",
              action: {
                type: "uri",
                label: "Baca Berita",
                uri: link
              },
              color: "#FFD700",
              style: "secondary"
            }
          ]
        }
      }
    };
  }
};
