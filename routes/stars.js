var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let query = req.query
    console.log(`rows ${query.rows}`)
    console.log(`cols ${query.cols}`)
  res.render('stars', { title: 'Stars',query:query });
});

// db.courses.insert({CourseId:"44642",Title:"Java",Days:["Monday","Wednesday","Thursday"],Instructor:"Ajay Bandi",Location:"CH 1200",Students:44,Mode:"In-person"})

// db.courses.insertMany([
// {CourseId:"44560",Title:"Advanced Database",Days:["Tuesday","Thursday"],Instructor:"Zhengrui Qin",Location:"CH 3250",Students:65,Mode:"In-person"},
// {CourseId:"44563",Title:"Web Applications",Days:["Monday","Wednesday","Thursday"],Instructor:"Charles Hoot",Location:"CH 1200",Students:45,Mode:"Hybrid"},
// {CourseId:"44692",Title:"Graduate Directed Project",Days:["Monday","Wednesday","Thursday"],Instructor:"Charles Badami, Denise Case",Location:"",Students:50,Mode:"Online"},
// {CourseId:"44635",Title:"Designing Instructional Systems",Days:[],Instructor:"Nancy Zeliff",Location:"",Students:0,Mode:""},
// {CourseId:"44651",Title:"Enterprise Networking ",Days:["Tuesday","Wednesday"],Instructor:"Zhengrui Qin",Location:"CH 3600",Students:53,Mode:"In-person"},
// {CourseId:"44330",Title:"Presentation Graphics",Days:[],Instructor:"Cari K Cline",Location:"",Students:0,Mode:"Online"}])

module.exports = router;
