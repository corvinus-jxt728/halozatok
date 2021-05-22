using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.gondolatModels
{
    public partial class Munkakorok
    {
        public Munkakorok()
        {
            Munkatarsaks = new HashSet<Munkatarsak>();
        }

        public int AzonMk { get; set; }
        public string Nev { get; set; }
        public int SzabadEvente { get; set; }
        public double FizSzorzo { get; set; }
        public string Leiras { get; set; }
        public int MunkapercHavi { get; set; }

        public virtual ICollection<Munkatarsak> Munkatarsaks { get; set; }
    }
}
