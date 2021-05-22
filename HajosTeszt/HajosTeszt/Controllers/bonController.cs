using HajosTeszt.gondolatModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
   
    [Route("api/bonusz")]
    [ApiController]
    public class bonController : ControllerBase
    {
        // GET: api/<bonController>
        [HttpGet]
        public IEnumerable<Gondola> Get()
        {
            bonuszContext context = new bonuszContext();
            return context.Gondolas.ToList();
        }

        // GET api/<bonController>/5
        [HttpGet("{id}")]
        public Gondola Get(int id)
        {
            bonuszContext context = new bonuszContext();
            var keresett = (from x in context.Gondolas
                            where x.Id == id
                            select x).FirstOrDefault();
            return keresett;
        }

        // POST api/<bonController>
        [HttpPost]
        public void Post([FromBody] Gondola kText)
        {

            bonuszContext context = new bonuszContext();
            context.Gondolas.Add(kText);
            //  Gondola uj = new Gondola();
            // uj.Gondolat = bontott[1].ToString();
            // uj.Ido = DateTime.Now;

            context.SaveChanges();
        }

        // PUT api/<bonController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<bonController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            bonuszContext context = new bonuszContext();
            var törlendő = (from x in context.Gondolas
                            where x.Id == id
                            select x).FirstOrDefault();
            context.Remove(törlendő);
            context.SaveChanges();
        }
    }
}
