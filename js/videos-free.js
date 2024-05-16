/**
 * Дефолтное время кручения 22 сек.
 *
 * Длина кручения 22 сек:
 * 'video.webm'
 *
 * Длина кручения 22 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4]
 *
 * Длина кручения 30 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4, 30]
 *
 * Выберется случайное видео из списка, рандомится только при перезапуске всего списка видосов:
 * () => p5Wheel.random([
 *    ['video.webm', 4, 30],
 *    ['video.webm', 45],
 * ]),
 */
const videosFree = [
    () => p5Wheel.random([
        ['videos/01.mp4', 0, 30],
        ['videos/02.mp4', 0, 30],
        ['videos/03.mp4', 0, 30],
        ['videos/04.mp4', 0, 30],
        ['videos/05.mp4', 0, 30],
        ['videos/06.mp4', 0, 30],
        ['videos/07.mp4', 0, 30],
        ['videos/08.mp4', 0, 30],
        ['videos/09.mp4', 0, 30],
        ['videos/10.mp4', 0, 30],
        ['videos/11.mp4', 0, 30],
        ['videos/12.mp4', 0, 30],
        ['videos/13.mp4', 0, 30],
        ['videos/14.mp4', 0, 30],
        ['videos/15.mp4', 0, 30],
        ['videos/16.mp4', 0, 30],
        ['videos/17.mp4', 0, 30],
        ['videos/18.mp4', 0, 30],
        ['videos/19.mp4', 0, 30],
        ['videos/20.mp4', 0, 30],
        ['videos/21.mp4', 0, 30],
        ['videos/22.mp4', 0, 30],
        ['videos/23.mp4', 0, 30],
        ['videos/24.mp4', 0, 30],
        ['videos/25.mp4', 0, 30],
        ['videos/26.mp4', 0, 30],
        ['videos/27.mp4', 0, 30],
        ['videos/28.mp4', 0, 30],
        ['videos/29.mp4', 0, 30],
        ['videos/30.mp4', 0, 30],
        ['videos/31.mp4', 0, 30],
        ['videos/32.mp4', 0, 30],
        ['videos/33.mp4', 0, 30],
        ['videos/34.mp4', 0, 30],
        ['videos/35.mp4', 0, 30],
        ['videos/36.mp4', 0, 30],
        ['videos/37.mp4', 0, 30],
        ['videos/38.mp4', 0, 30],
        ['videos/39.mp4', 0, 30],
        ['videos/40.mp4', 0, 30],
        ['videos/41.mp4', 0, 30],
        ['videos/42.mp4', 0, 30],
        ['videos/43.mp4', 0, 30],
        ['videos/44.mp4', 0, 30],
        ['videos/45.mp4', 0, 30],
        ['videos/46.mp4', 0, 30],
        ['videos/47.mp4', 0, 30],
        ['videos/48.mp4', 0, 30],
        ['videos/49.mp4', 0, 30],
        ['videos/50.mp4', 0, 30],
        ['videos/51.mp4', 0, 30],
        ['videos/52.mp4', 0, 30],
        ['videos/53.mp4', 0, 30],
        ['videos/54.mp4', 0, 30],
        ['videos/55.mp4', 0, 30],
        ['videos/56.mp4', 0, 30],
        ['videos/57.mp4', 0, 30]
    ])  
];
