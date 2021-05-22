using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.gondolatModels
{
    public partial class Teljesitmenyek
    {
        public int AzonTelj { get; set; }
        public DateTime MegszIdopont { get; set; }
        public int Tipus { get; set; }
        public string Reszlet { get; set; }
        public int Ertek { get; set; }
        public int AzonMt { get; set; }

        public virtual Munkatarsak AzonMtNavigation { get; set; }
    }
}
