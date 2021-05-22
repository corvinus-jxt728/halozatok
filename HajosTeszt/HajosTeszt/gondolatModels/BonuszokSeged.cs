using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.gondolatModels
{
    public partial class BonuszokSeged
    {
        public int BonId { get; set; }
        public int AzonMt { get; set; }
        public int AzonBon { get; set; }
        public int ErvenyesHonap { get; set; }

        public virtual Bonuszok AzonBonNavigation { get; set; }
        public virtual Munkatarsak AzonMtNavigation { get; set; }
    }
}
