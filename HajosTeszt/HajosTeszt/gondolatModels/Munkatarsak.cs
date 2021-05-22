using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.gondolatModels
{
    public partial class Munkatarsak
    {
        public Munkatarsak()
        {
            BonuszokSegeds = new HashSet<BonuszokSeged>();
            Teljesitmenyeks = new HashSet<Teljesitmenyek>();
        }

        public int AzonMt { get; set; }
        public string Nev { get; set; }
        public DateTime SzerzodesAktiv { get; set; }
        public double FizSzorzo { get; set; }
        public int? SzabadnapHasznalt { get; set; }
        public int AzonMk { get; set; }

        public virtual Munkakorok AzonMkNavigation { get; set; }
        public virtual ICollection<BonuszokSeged> BonuszokSegeds { get; set; }
        public virtual ICollection<Teljesitmenyek> Teljesitmenyeks { get; set; }
    }
}
