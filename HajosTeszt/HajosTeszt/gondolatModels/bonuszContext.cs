using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HajosTeszt.gondolatModels
{
    public partial class bonuszContext : DbContext
    {
        public bonuszContext()
        {
        }

        public bonuszContext(DbContextOptions<bonuszContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bonuszok> Bonuszoks { get; set; }
        public virtual DbSet<BonuszokSeged> BonuszokSegeds { get; set; }
        public virtual DbSet<Gondola> Gondolas { get; set; }
        public virtual DbSet<Munkakorok> Munkakoroks { get; set; }
        public virtual DbSet<Munkatarsak> Munkatarsaks { get; set; }
        public virtual DbSet<Table> Tables { get; set; }
        public virtual DbSet<Teljesitmenyek> Teljesitmenyeks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=abrszsajat.database.windows.net;Initial Catalog=bonusz;Persist Security Info=True;User ID=tanulo;Password=Password123");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Bonuszok>(entity =>
            {
                entity.HasKey(e => e.AzonBon);

                entity.ToTable("bonuszok");

                entity.Property(e => e.AzonBon)
                    .ValueGeneratedNever()
                    .HasColumnName("azon_bon");

                entity.Property(e => e.ErvenyesHosszora).HasColumnName("ervenyes_hosszora");

                entity.Property(e => e.FizFix).HasColumnName("fiz_fix");

                entity.Property(e => e.FizSzorzo).HasColumnName("fiz_szorzo");
            });

            modelBuilder.Entity<BonuszokSeged>(entity =>
            {
                entity.HasKey(e => e.BonId);

                entity.ToTable("bonuszok_seged");

                entity.Property(e => e.BonId)
                    .ValueGeneratedNever()
                    .HasColumnName("bon_id");

                entity.Property(e => e.AzonBon).HasColumnName("azon_bon");

                entity.Property(e => e.AzonMt).HasColumnName("azon_mt");

                entity.Property(e => e.ErvenyesHonap).HasColumnName("ervenyes_honap");

                entity.HasOne(d => d.AzonBonNavigation)
                    .WithMany(p => p.BonuszokSegeds)
                    .HasForeignKey(d => d.AzonBon)
                    .HasConstraintName("FK_bon_mt");

                entity.HasOne(d => d.AzonMtNavigation)
                    .WithMany(p => p.BonuszokSegeds)
                    .HasForeignKey(d => d.AzonMt)
                    .HasConstraintName("FK_mt_bon");
            });

            modelBuilder.Entity<Gondola>(entity =>
            {
                entity.ToTable("gondola");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Gondolat)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("gondolat");
            });

            modelBuilder.Entity<Munkakorok>(entity =>
            {
                entity.HasKey(e => e.AzonMk);

                entity.ToTable("munkakorok");

                entity.Property(e => e.AzonMk)
                    .ValueGeneratedNever()
                    .HasColumnName("azon_mk");

                entity.Property(e => e.FizSzorzo).HasColumnName("fiz_szorzo");

                entity.Property(e => e.Leiras)
                    .HasColumnType("text")
                    .HasColumnName("leiras");

                entity.Property(e => e.MunkapercHavi).HasColumnName("munkaperc_havi");

                entity.Property(e => e.Nev)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("nev");

                entity.Property(e => e.SzabadEvente).HasColumnName("szabad_evente");
            });

            modelBuilder.Entity<Munkatarsak>(entity =>
            {
                entity.HasKey(e => e.AzonMt);

                entity.ToTable("munkatarsak");

                entity.Property(e => e.AzonMt)
                    .ValueGeneratedNever()
                    .HasColumnName("azon_mt");

                entity.Property(e => e.AzonMk).HasColumnName("azon_mk");

                entity.Property(e => e.FizSzorzo).HasColumnName("fiz_szorzo");

                entity.Property(e => e.Nev)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("nev");

                entity.Property(e => e.SzabadnapHasznalt).HasColumnName("szabadnap_hasznalt");

                entity.Property(e => e.SzerzodesAktiv)
                    .HasColumnType("datetime")
                    .HasColumnName("szerzodes_aktiv");

                entity.HasOne(d => d.AzonMkNavigation)
                    .WithMany(p => p.Munkatarsaks)
                    .HasForeignKey(d => d.AzonMk)
                    .HasConstraintName("FK_mk_mt");
            });

            modelBuilder.Entity<Table>(entity =>
            {
                entity.HasKey(e => e.Ido)
                    .HasName("PK__Table__DC501A015420B3F0");

                entity.ToTable("Table");

                entity.Property(e => e.Ido)
                    .HasColumnType("datetime")
                    .HasColumnName("ido");

                entity.Property(e => e.Gondolat)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("gondolat");
            });

            modelBuilder.Entity<Teljesitmenyek>(entity =>
            {
                entity.HasKey(e => e.AzonTelj);

                entity.ToTable("teljesitmenyek");

                entity.Property(e => e.AzonTelj)
                    .ValueGeneratedNever()
                    .HasColumnName("azon_telj");

                entity.Property(e => e.AzonMt).HasColumnName("azon_mt");

                entity.Property(e => e.Ertek).HasColumnName("ertek");

                entity.Property(e => e.MegszIdopont)
                    .HasColumnType("datetime")
                    .HasColumnName("megsz_idopont");

                entity.Property(e => e.Reszlet)
                    .HasColumnType("text")
                    .HasColumnName("reszlet");

                entity.Property(e => e.Tipus).HasColumnName("tipus");

                entity.HasOne(d => d.AzonMtNavigation)
                    .WithMany(p => p.Teljesitmenyeks)
                    .HasForeignKey(d => d.AzonMt)
                    .HasConstraintName("FK_mt_telj");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
