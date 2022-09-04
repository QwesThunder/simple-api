const express = require('express');
const MainController = require('../controllers/main');
const ImageController = require('../controllers/image');
const AnimeController = require('../controllers/anime');
const ConvertController = require('../controllers/convert');
const imageSfw = require('../controllers/imageSfw');

const router = express.Router();

router.get('/', MainController.home);

router.get('/image', ImageController.home);
router.get('/image/pinterest/:query', ImageController.pinterest);
router.get('/image/wallpaperflare/:query', ImageController.wallpaperflare);

router.get('/sfw', imageSfw.home);
router.get('/sfw/neko', imageSfw.neko);
router.get('/sfw/foxgirl', imageSfw.foxgirl);

router.get('/anime', AnimeController.home);
router.get('/anime/anoboy/:query', AnimeController.anoboy);
router.get('/anime/otakudesu/:query', AnimeController.otakudesu);
router.get('/anime/mal/top-airing', AnimeController.malTopAiring);
router.get('/anime/mal/top-anime', AnimeController.malTopAnime);
router.get('/anime/mal/search/:query', AnimeController.malAnime);
router.get('/anime/mal/manga/:query', AnimeController.malManga);
router.get('/anime/mal/character/:query', AnimeController.malCharacter);

router.get('/convert', ConvertController.home);
router.get('/convert/emoji2png/:emoji', ConvertController.emoji2png);

module.exports = router;
