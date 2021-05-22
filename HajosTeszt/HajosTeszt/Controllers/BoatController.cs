using HajosTeszt.gondolatModels;
using HajosTeszt.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{

    //[Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {
        [HttpGet]
        [Route("questions/all")]
        public ActionResult M1()
        {
            HajostesztContext context = new HajostesztContext();
            var kerdesek = from x in context.Questions select x.QuestionText;

            return new JsonResult(kerdesek);
        }
        [Route("api/leker")]
        public ActionResult M10()
        {
            bonuszContext context = new bonuszContext();
            var k = from x in context.Gondolas select x.Gondolat;

            return new JsonResult(k);
        }
        [Route("api/mennyi")]
        public int M11()
        {
            bonuszContext context = new bonuszContext();
            int Száma = context.Gondolas.Count();

            return Száma;
        }
        [Route("questions/{sorszam}")]
        public ActionResult M2(int sorszam)
        {
            HajostesztContext context = new HajostesztContext();
            var kerdes = (from x in context.Questions
                          where x.QuestionId == sorszam
                          select x).FirstOrDefault();

            if (kerdes == null) return BadRequest("Nincs ilyen sorszamú kerdes");

            return new JsonResult(kerdes);
        }
        [Route("questions/count")]
        public int M4() //Tetszőleges metódusnév
        {
            HajostesztContext context = new HajostesztContext();
            int kérdésekSzáma = context.Questions.Count();

            return kérdésekSzáma;
        }
        
    }
}
 
