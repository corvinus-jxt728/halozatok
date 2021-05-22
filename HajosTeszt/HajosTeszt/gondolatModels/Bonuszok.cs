using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.gondolatModels
{
    public partial class Bonuszok
    {
        public Bonuszok()
        {
            BonuszokSegeds = new HashSet<BonuszokSeged>();
        }

        public int AzonBon { get; set; }
        public int ErvenyesHosszora { get; set; }
        public double FizSzorzo { get; set; }
        public int FizFix { get; set; }

        public virtual ICollection<BonuszokSeged> BonuszokSegeds { get; set; }
    }
}
