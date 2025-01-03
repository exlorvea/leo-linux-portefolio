window.onload = function () {
    const loader = document.getElementById('loader');
    const loaderMessages = document.getElementById('loader-messages');
    const mainContent = document.getElementById('mainContent');
    const messages = [
        "[BOOT] Initializing system components...",
"        [    0.000000] microcode: microcode updated early to revision 0xf0, date = 2021-11-12
"[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-6.1.0-28-amd64 root=UUID=551c9df6-eaa9-4d04-b363-acf2caf0006e ro quiet
"[    0.000000] BIOS-provided physical RAM map:
"[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009e7ff] usable
"[    0.000000] BIOS-e820: [mem 0x000000000009e800-0x000000000009ffff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000000e0000-0x00000000000fffff] reserved
"[    0.000000] BIOS-e820: [mem 0x0000000000100000-0x000000009079cfff] usable
"[    0.000000] BIOS-e820: [mem 0x000000009079d000-0x000000009079dfff] ACPI NVS
"[    0.000000] BIOS-e820: [mem 0x000000009079e000-0x00000000907c7fff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000907c8000-0x0000000090878fff] usable
"[    0.000000] BIOS-e820: [mem 0x0000000090879000-0x0000000091179fff] reserved
"[    0.000000] BIOS-e820: [mem 0x000000009117a000-0x00000000a738efff] usable
"[    0.000000] BIOS-e820: [mem 0x00000000a738f000-0x00000000a7d7efff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000a7d7f000-0x00000000a7f7efff] ACPI NVS
"[    0.000000] BIOS-e820: [mem 0x00000000a7f7f000-0x00000000a7ffefff] ACPI data
"[    0.000000] BIOS-e820: [mem 0x00000000a7fff000-0x00000000a7ffffff] usable
"[    0.000000] BIOS-e820: [mem 0x00000000a8000000-0x00000000a80fffff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000a8800000-0x00000000ad7fffff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000e0000000-0x00000000efffffff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000fd000000-0x00000000fe7fffff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000feb00000-0x00000000feb03fff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000fec00000-0x00000000fec00fff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000fed00000-0x00000000fed00fff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000fed10000-0x00000000fed19fff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000fed84000-0x00000000fed84fff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000fee00000-0x00000000fee00fff] reserved
"[    0.000000] BIOS-e820: [mem 0x00000000ffa00000-0x00000000ffffffff] reserved
"[    0.000000] BIOS-e820: [mem 0x0000000100000000-0x00000003517fffff] usable
"[    0.000000] NX (Execute Disable) protection: active
"[    0.000000] SMBIOS 3.0 present.
"[    0.000000] DMI: Acer TravelMate P259-M/Lyra_SK     , BIOS V1.26 03/16/2017
"[    0.000000] tsc: Detected 2300.000 MHz processor
"[    0.000000] tsc: Detected 2299.968 MHz TSC
"[    0.001026] last_pfn = 0x351800 max_arch_pfn = 0x400000000
"[    0.001147] x86/PAT: Configuration [0-7]: WB  WC  UC- UC  WB  WP  UC- WT  
"[    0.001718] last_pfn = 0xa8000 max_arch_pfn = 0x400000000
"[    0.012244] found SMP MP-table at [mem 0x000fe1b0-0x000fe1bf]
"[    0.012262] Using GB pages for direct mapping
"[    0.013208] RAMDISK: [mem 0x2edbb000-0x336d4fff]
"[    0.013214] ACPI: Early table checksum verification disabled
"[    0.013217] ACPI: RSDP 0x00000000000FE020 000024 (v02 ACRSYS)
"[    0.013222] ACPI: XSDT 0x00000000A7FE0188 0000F4 (v01 ACRSYS ACRPRDCT 00000000      01000013)
"[    0.013227] ACPI: FACP 0x00000000A7FE6000 0000F4 (v05 ACRSYS ACRPRDCT 00000000 1025 00040000)
"[    0.013233] ACPI: DSDT 0x00000000A7FC9000 016716 (v02 ACRSYS ACRPRDCT 00000000 1025 00040000)
"[    0.013237] ACPI: FACS 0x00000000A7F7D000 000040
"[    0.013240] ACPI: UEFI 0x00000000A7FFC000 000236 (v01 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013244] ACPI: SSDT 0x00000000A7FFA000 000534 (v01 ACRSYS ACRPRDCT 00001000 1025 00040000)
"[    0.013247] ACPI: SSDT 0x00000000A7FF4000 00443C (v01 ACRSYS ACRPRDCT 00001000 1025 00040000)
"[    0.013251] ACPI: SSDT 0x00000000A7FEE000 004E73 (v02 ACRSYS ACRPRDCT 00003000 1025 00040000)
"[    0.013254] ACPI: DBG2 0x00000000A7FEC000 000054 (v00 ACRSYS ACRPRDCT 00000000 1025 00040000)
"[    0.013257] ACPI: ASF! 0x00000000A7FEA000 0000A5 (v32 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013261] ACPI: BOOT 0x00000000A7FE8000 000028 (v01 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013264] ACPI: HPET 0x00000000A7FE5000 000038 (v01 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013268] ACPI: APIC 0x00000000A7FE3000 0000BC (v03 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013271] ACPI: SLIC 0x00000000A7FE1000 000176 (v01 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013274] ACPI: SSDT 0x00000000A7FC7000 0004A3 (v02 ACRSYS ACRPRDCT 00001000 1025 00040000)
"[    0.013278] ACPI: SSDT 0x00000000A7FC6000 000E73 (v02 ACRSYS ACRPRDCT 00003000 1025 00040000)
"[    0.013281] ACPI: UEFI 0x00000000A7FFB000 000042 (v01 ACRSYS ACRPRDCT 00000002 1025 00040000)
"[    0.013284] ACPI: MSDM 0x00000000A7FF3000 000055 (v03 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013288] ACPI: SSDT 0x00000000A7FEB000 0004AB (v02 ACRSYS ACRPRDCT 00000000 1025 00040000)
"[    0.013291] ACPI: DBGP 0x00000000A7FE7000 000034 (v01 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013295] ACPI: MCFG 0x00000000A7FE2000 00003C (v01 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013298] ACPI: FPDT 0x00000000A7FC4000 000044 (v01 ACRSYS ACRPRDCT 00000002 1025 00040000)
"[    0.013302] ACPI: TPM2 0x00000000A7FF9000 000034 (v03 ACRSYS ACRPRDCT 00000000 1025 00040000)
"[    0.013305] ACPI: ASPT 0x00000000A7FE9000 000034 (v07 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013308] ACPI: SSDT 0x00000000A7FC8000 00019A (v02 ACRSYS ACRPRDCT 00001000 1025 00040000)
"[    0.013312] ACPI: TCPA 0x00000000A7FFD000 000032 (v02 ACRSYS ACRPRDCT 00000000 1025 00040000)
"[    0.013315] ACPI: LPIT 0x00000000A7FE4000 000094 (v01 ACRSYS ACRPRDCT 00000000 1025 00040000)
"[    0.013318] ACPI: DBGP 0x00000000A7FED000 000034 (v01 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013322] ACPI: DMAR 0x00000000A7FC5000 0000CC (v01 ACRSYS ACRPRDCT 00000001 1025 00040000)
"[    0.013324] ACPI: Reserving FACP table memory at [mem 0xa7fe6000-0xa7fe60f3]
"[    0.013326] ACPI: Reserving DSDT table memory at [mem 0xa7fc9000-0xa7fdf715]
"[    0.013328] ACPI: Reserving FACS table memory at [mem 0xa7f7d000-0xa7f7d03f]
"[    0.013329] ACPI: Reserving UEFI table memory at [mem 0xa7ffc000-0xa7ffc235]
"[    0.013330] ACPI: Reserving SSDT table memory at [mem 0xa7ffa000-0xa7ffa533]
"[    0.013331] ACPI: Reserving SSDT table memory at [mem 0xa7ff4000-0xa7ff843b]
"[    0.013332] ACPI: Reserving SSDT table memory at [mem 0xa7fee000-0xa7ff2e72]
"[    0.013333] ACPI: Reserving DBG2 table memory at [mem 0xa7fec000-0xa7fec053]
"[    0.013333] ACPI: Reserving ASF! table memory at [mem 0xa7fea000-0xa7fea0a4]
"[    0.013334] ACPI: Reserving BOOT table memory at [mem 0xa7fe8000-0xa7fe8027]
"[    0.013335] ACPI: Reserving HPET table memory at [mem 0xa7fe5000-0xa7fe5037]
"[    0.013337] ACPI: Reserving APIC table memory at [mem 0xa7fe3000-0xa7fe30bb]
"[    0.013338] ACPI: Reserving SLIC table memory at [mem 0xa7fe1000-0xa7fe1175]
"[    0.013339] ACPI: Reserving SSDT table memory at [mem 0xa7fc7000-0xa7fc74a2]
"[    0.013340] ACPI: Reserving SSDT table memory at [mem 0xa7fc6000-0xa7fc6e72]
"[    0.013341] ACPI: Reserving UEFI table memory at [mem 0xa7ffb000-0xa7ffb041]
"[    0.013342] ACPI: Reserving MSDM table memory at [mem 0xa7ff3000-0xa7ff3054]
"[    0.013343] ACPI: Reserving SSDT table memory at [mem 0xa7feb000-0xa7feb4aa]
"[    0.013344] ACPI: Reserving DBGP table memory at [mem 0xa7fe7000-0xa7fe7033]
"[    0.013345] ACPI: Reserving MCFG table memory at [mem 0xa7fe2000-0xa7fe203b]
"[    0.013346] ACPI: Reserving FPDT table memory at [mem 0xa7fc4000-0xa7fc4043]
"[    0.013347] ACPI: Reserving TPM2 table memory at [mem 0xa7ff9000-0xa7ff9033]
"[    0.013348] ACPI: Reserving ASPT table memory at [mem 0xa7fe9000-0xa7fe9033]
"[    0.013349] ACPI: Reserving SSDT table memory at [mem 0xa7fc8000-0xa7fc8199]
"[    0.013350] ACPI: Reserving TCPA table memory at [mem 0xa7ffd000-0xa7ffd031]
"[    0.013351] ACPI: Reserving LPIT table memory at [mem 0xa7fe4000-0xa7fe4093]
"[    0.013352] ACPI: Reserving DBGP table memory at [mem 0xa7fed000-0xa7fed033]
"[    0.013353] ACPI: Reserving DMAR table memory at [mem 0xa7fc5000-0xa7fc50cb]
"[    0.013477] No NUMA configuration found
"[    0.013478] Faking a node at [mem 0x0000000000000000-0x00000003517fffff]
"[    0.013491] NODE_DATA(0) allocated [mem 0x3517d3000-0x3517fdfff]
"[    0.013773] Zone ranges:
"[    0.013773]   DMA      [mem 0x0000000000001000-0x0000000000ffffff]
"[    0.013776]   DMA32    [mem 0x0000000001000000-0x00000000ffffffff]
"[    0.013778]   Normal   [mem 0x0000000100000000-0x00000003517fffff]
"[    0.013780]   Device   empty
"[    0.013781] Movable zone start for each node
"[    0.013783] Early memory node ranges
"[    0.013784]   node   0: [mem 0x0000000000001000-0x000000000009dfff]
"[    0.013786]   node   0: [mem 0x0000000000100000-0x000000009079cfff]
"[    0.013787]   node   0: [mem 0x00000000907c8000-0x0000000090878fff]
"[    0.013788]   node   0: [mem 0x000000009117a000-0x00000000a738efff]
"[    0.013789]   node   0: [mem 0x00000000a7fff000-0x00000000a7ffffff]
"[    0.013790]   node   0: [mem 0x0000000100000000-0x00000003517fffff]
"[    0.013793] Initmem setup node 0 [mem 0x0000000000001000-0x00000003517fffff]
"[    0.013799] On node 0, zone DMA: 1 pages in unavailable ranges
"[    0.013836] On node 0, zone DMA: 98 pages in unavailable ranges
"[    0.019021] On node 0, zone DMA32: 43 pages in unavailable ranges
"[    0.019859] On node 0, zone DMA32: 2305 pages in unavailable ranges
"[    0.019911] On node 0, zone DMA32: 3184 pages in unavailable ranges
"[    0.020645] On node 0, zone Normal: 26624 pages in unavailable ranges
"[    0.020654] Reserving Intel graphics memory at [mem 0xa9800000-0xad7fffff]
"[    0.020852] ACPI: PM-Timer IO Port: 0x1808
"[    0.020859] ACPI: LAPIC_NMI (acpi_id[0x01] high edge lint[0x1])
"[    0.020861] ACPI: LAPIC_NMI (acpi_id[0x02] high edge lint[0x1])
"[    0.020862] ACPI: LAPIC_NMI (acpi_id[0x03] high edge lint[0x1])
"[    0.020863] ACPI: LAPIC_NMI (acpi_id[0x04] high edge lint[0x1])
"[    0.020864] ACPI: LAPIC_NMI (acpi_id[0x05] high edge lint[0x1])
"[    0.020865] ACPI: LAPIC_NMI (acpi_id[0x06] high edge lint[0x1])
"[    0.020866] ACPI: LAPIC_NMI (acpi_id[0x07] high edge lint[0x1])
"[    0.020867] ACPI: LAPIC_NMI (acpi_id[0x08] high edge lint[0x1])
"[    0.020893] IOAPIC[0]: apic_id 2, version 32, address 0xfec00000, GSI 0-119
"[    0.020896] ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)
"[    0.020898] ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 high level)
"[    0.020903] ACPI: Using ACPI (MADT) for SMP configuration information
"[    0.020904] ACPI: HPET id: 0x8086a201 base: 0xfed00000
"[    0.020908] TSC deadline timer available
"[    0.020908] smpboot: Allowing 4 CPUs, 0 hotplug CPUs
"[    0.020935] PM: hibernation: Registered nosave memory: [mem 0x00000000-0x00000fff]
"[    0.020938] PM: hibernation: Registered nosave memory: [mem 0x0009e000-0x0009efff]
"[    0.020939] PM: hibernation: Registered nosave memory: [mem 0x0009f000-0x0009ffff]
"[    0.020940] PM: hibernation: Registered nosave memory: [mem 0x000a0000-0x000dffff]
"[    0.020941] PM: hibernation: Registered nosave memory: [mem 0x000e0000-0x000fffff]
"[    0.020943] PM: hibernation: Registered nosave memory: [mem 0x9079d000-0x9079dfff]
"[    0.020944] PM: hibernation: Registered nosave memory: [mem 0x9079e000-0x907c7fff]
"[    0.020946] PM: hibernation: Registered nosave memory: [mem 0x90879000-0x91179fff]
"[    0.020948] PM: hibernation: Registered nosave memory: [mem 0xa738f000-0xa7d7efff]
"[    0.020949] PM: hibernation: Registered nosave memory: [mem 0xa7d7f000-0xa7f7efff]
"[    0.020950] PM: hibernation: Registered nosave memory: [mem 0xa7f7f000-0xa7ffefff]
"[    0.020952] PM: hibernation: Registered nosave memory: [mem 0xa8000000-0xa80fffff]
"[    0.020953] PM: hibernation: Registered nosave memory: [mem 0xa8100000-0xa87fffff]
"[    0.020954] PM: hibernation: Registered nosave memory: [mem 0xa8800000-0xad7fffff]
"[    0.020955] PM: hibernation: Registered nosave memory: [mem 0xad800000-0xdfffffff]
"[    0.020956] PM: hibernation: Registered nosave memory: [mem 0xe0000000-0xefffffff]
"[    0.020956] PM: hibernation: Registered nosave memory: [mem 0xf0000000-0xfcffffff]
"[    0.020957] PM: hibernation: Registered nosave memory: [mem 0xfd000000-0xfe7fffff]
"[    0.020958] PM: hibernation: Registered nosave memory: [mem 0xfe800000-0xfeafffff]
"[    0.020959] PM: hibernation: Registered nosave memory: [mem 0xfeb00000-0xfeb03fff]
"[    0.020960] PM: hibernation: Registered nosave memory: [mem 0xfeb04000-0xfebfffff]
"[    0.020960] PM: hibernation: Registered nosave memory: [mem 0xfec00000-0xfec00fff]
"[    0.020961] PM: hibernation: Registered nosave memory: [mem 0xfec01000-0xfecfffff]
"[    0.020962] PM: hibernation: Registered nosave memory: [mem 0xfed00000-0xfed00fff]
"[    0.020963] PM: hibernation: Registered nosave memory: [mem 0xfed01000-0xfed0ffff]
"[    0.020964] PM: hibernation: Registered nosave memory: [mem 0xfed10000-0xfed19fff]
"[    0.020964] PM: hibernation: Registered nosave memory: [mem 0xfed1a000-0xfed83fff]
"[    0.020965] PM: hibernation: Registered nosave memory: [mem 0xfed84000-0xfed84fff]
"[    0.020966] PM: hibernation: Registered nosave memory: [mem 0xfed85000-0xfedfffff]
"[    0.020967] PM: hibernation: Registered nosave memory: [mem 0xfee00000-0xfee00fff]
"[    0.020968] PM: hibernation: Registered nosave memory: [mem 0xfee01000-0xff9fffff]
"[    0.020968] PM: hibernation: Registered nosave memory: [mem 0xffa00000-0xffffffff]
"[    0.020970] [mem 0xad800000-0xdfffffff] available for PCI devices
"[    0.020972] Booting paravirtualized kernel on bare hardware
"[    0.020974] clocksource: refined-jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645519600211568 ns
"[    0.027233] setup_percpu: NR_CPUS:8192 nr_cpumask_bits:4 nr_cpu_ids:4 nr_node_ids:1
"[    0.027389] percpu: Embedded 61 pages/cpu s212992 r8192 d28672 u524288
"[    0.027436] Fallback order for Node 0: 0 
"[    0.027439] Built 1 zonelists, mobility grouping on.  Total pages: 3064666
"[    0.027441] Policy zone: Normal
"[    0.028350] Dentry cache hash table entries: 2097152 (order: 12, 16777216 bytes, linear)
"[    0.028775] Inode-cache hash table entries: 1048576 (order: 11, 8388608 bytes, linear)
"[    0.028839] mem auto-init: stack:all(zero), heap alloc:on, heap free:off
"[    0.028848] software IO TLB: area num 4.
"[    0.050362] Memory: 2666464K/12453892K available (14342K kernel code, 2335K rwdata, 9080K rodata, 2800K init, 17392K bss, 417520K reserved, 0K cma-reserved)
"[    0.050500] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=4, Nodes=1
"[    0.050515] Kernel/User page tables isolation: enabled
"[    0.050547] ftrace: allocating 40283 entries in 158 pages
"[    0.058708] ftrace: allocated 158 pages with 5 groups
"[    0.059494] Dynamic Preempt: voluntary
"[    0.059523] rcu: Preemptible hierarchical RCU implementation.
"[    0.059524] rcu:     RCU restricting CPUs from NR_CPUS=8192 to nr_cpu_ids=4.
"[    0.059526]  Trampoline variant of Tasks RCU enabled.
"[    0.059526]  Rude variant of Tasks RCU enabled.
"[    0.059527]  Tracing variant of Tasks RCU enabled.
"[    0.059527] rcu: RCU calculated value of scheduler-enlistment delay is 25 jiffies.
"[    0.059528] rcu: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=4
"[    0.064507] NR_IRQS: 524544, nr_irqs: 1024, preallocated irqs: 16
"[    0.064716] rcu: srcu_init: Setting srcu_struct sizes based on contention.
"[    0.067231] Console: colour VGA+ 80x25
"[    0.067254] printk: console [tty0] enabled
"[    0.067272] ACPI: Core revision 20220331
"[    0.067461] hpet: HPET dysfunctional in PC10. Force disabled.
"[    0.067463] APIC: Switch to symmetric I/O mode setup
"[    0.067465] DMAR: Host address width 39
"[    0.067466] DMAR: DRHD base: 0x000000fed90000 flags: 0x0
"[    0.067474] DMAR: dmar0: reg_base_addr fed90000 ver 1:0 cap 1c0000c40660462 ecap 7e3ff0505e
"[    0.067477] DMAR: DRHD base: 0x000000fed91000 flags: 0x1
"[    0.067482] DMAR: dmar1: reg_base_addr fed91000 ver 1:0 cap d2008c40660462 ecap f050da
"[    0.067484] DMAR: RMRR base: 0x000000a7c7b000 end: 0x000000a7c9afff
"[    0.067486] DMAR: RMRR base: 0x000000a9000000 end: 0x000000ad7fffff
"[    0.067488] DMAR: ANDD device: 1 name: \_SB.PCI0.I2C0
"[    0.067490] DMAR-IR: IOAPIC id 2 under DRHD base  0xfed91000 IOMMU 1
"[    0.067492] DMAR-IR: HPET id 0 under DRHD base 0xfed91000
"[    0.067493] DMAR-IR: x2apic is disabled because BIOS sets x2apic opt out bit.
"[    0.067494] DMAR-IR: Use 'intremap=no_x2apic_optout' to override the BIOS setting.
"[    0.069087] DMAR-IR: Enabled IRQ remapping in xapic mode
"[    0.069089] x2apic: IRQ remapping doesn't support X2APIC mode
"[    0.072911] clocksource: tsc-early: mask: 0xffffffffffffffff max_cycles: 0x212717146a7, max_idle_ns: 440795291431 ns
"[    0.072917] Calibrating delay loop (skipped), value calculated using timer frequency.. 4599.93 BogoMIPS (lpj=9199872)
"[    0.073004] CPU0: Thermal monitoring enabled (TM1)
"[    0.073046] process: using mwait in idle threads
"[    0.073049] Last level iTLB entries: 4KB 64, 2MB 8, 4MB 8
"[    0.073050] Last level dTLB entries: 4KB 64, 2MB 0, 4MB 0, 1GB 4
"[    0.073056] Spectre V1 : Mitigation: usercopy/swapgs barriers and __user pointer sanitization
"[    0.073059] Spectre V2 : Mitigation: IBRS
"[    0.073060] Spectre V2 : Spectre v2 / SpectreRSB mitigation: Filling RSB on context switch
"[    0.073061] Spectre V2 : Spectre v2 / SpectreRSB : Filling RSB on VMEXIT
"[    0.073062] RETBleed: Mitigation: IBRS
"[    0.073064] Spectre V2 : mitigation: Enabling conditional Indirect Branch Prediction Barrier
"[    0.073065] Spectre V2 : User space: Mitigation: STIBP via prctl
"[    0.073067] Speculative Store Bypass: Mitigation: Speculative Store Bypass disabled via prctl
"[    0.073072] MDS: Mitigation: Clear CPU buffers
"[    0.073073] TAA: Mitigation: TSX disabled
"[    0.073074] MMIO Stale Data: Mitigation: Clear CPU buffers
"[    0.073077] SRBDS: Mitigation: Microcode
"[    0.073078] GDS: Vulnerable: No microcode
"[    0.073084] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'
"[    0.073086] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'
"[    0.073088] x86/fpu: Supporting XSAVE feature 0x004: 'AVX registers'
"[    0.073089] x86/fpu: Supporting XSAVE feature 0x008: 'MPX bounds registers'
"[    0.073090] x86/fpu: Supporting XSAVE feature 0x010: 'MPX CSR'
"[    0.073092] x86/fpu: xstate_offset[2]:  576, xstate_sizes[2]:  256
"[    0.073095] x86/fpu: xstate_offset[3]:  832, xstate_sizes[3]:   64
"[    0.073097] x86/fpu: xstate_offset[4]:  896, xstate_sizes[4]:   64
"[    0.073099] x86/fpu: Enabled xstate features 0x1f, context size is 960 bytes, using 'compacted' format.
"[    0.076915] Freeing SMP alternatives memory: 36K
"[    0.076915] pid_max: default: 32768 minimum: 301
"[    0.076915] LSM: Security Framework initializing
"[    0.076915] landlock: Up and running.
"[    0.076915] Yama: disabled by default; enable with sysctl kernel.yama.*
"[    0.076915] AppArmor: AppArmor initialized
"[    0.076915] TOMOYO Linux initialized
"[    0.076915] LSM support for eBPF active
"[    0.076915] Mount-cache hash table entries: 32768 (order: 6, 262144 bytes, linear)
"[    0.076915] Mountpoint-cache hash table entries: 32768 (order: 6, 262144 bytes, linear)
"[    0.076915] smpboot: CPU0: Intel(R) Core(TM) i3-6100U CPU @ 2.30GHz (family: 0x6, model: 0x4e, stepping: 0x3)
"[    0.076915] cblist_init_generic: Setting adjustable number of callback queues.
"[    0.076915] cblist_init_generic: Setting shift to 2 and lim to 1.
"[    0.076915] cblist_init_generic: Setting adjustable number of callback queues.
"[    0.076915] cblist_init_generic: Setting shift to 2 and lim to 1.
"[    0.076915] cblist_init_generic: Setting adjustable number of callback queues.
"[    0.076915] cblist_init_generic: Setting shift to 2 and lim to 1.
"[    0.076915] Performance Events: PEBS fmt3+, Skylake events, 32-deep LBR, full-width counters, Intel PMU driver.
"[    0.076915] ... version:                4
"[    0.076915] ... bit width:              48
"[    0.076915] ... generic registers:      4
"[    0.076915] ... value mask:             0000ffffffffffff
"[    0.076915] ... max period:             00007fffffffffff
"[    0.076915] ... fixed-purpose events:   3
"[    0.076915] ... event mask:             000000070000000f
"[    0.076915] signal: max sigframe size: 2032
"[    0.076915] Estimated ratio of average max frequency by base frequency (times 1024): 1024
"[    0.076915] rcu: Hierarchical SRCU implementation.
"[    0.076915] rcu:     Max phase no-delay instances is 1000.
"[    0.076915] NMI watchdog: Enabled. Permanently consumes one hw-PMU counter.
"[    0.076915] smp: Bringing up secondary CPUs ...
"[    0.076915] x86: Booting SMP configuration:
"[    0.076915] .... node  #0, CPUs:      #1 #2
"[    0.077988] smp: Brought up 1 node, 4 CPUs
"[    0.077988] smpboot: Max logical packages: 1
"[    0.077988] smpboot: Total of 4 processors activated (18399.74 BogoMIPS)
"[    0.099869] node 0 deferred pages initialised in 16ms
"[    0.099872] devtmpfs: initialized
"[    0.099872] x86/mm: Memory block size: 128MB
"[    0.101763] ACPI: PM: Registering ACPI NVS region [mem 0x9079d000-0x9079dfff] (4096 bytes)
"[    0.101763] ACPI: PM: Registering ACPI NVS region [mem 0xa7d7f000-0xa7f7efff] (2097152 bytes)
"[    0.101763] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645041785100000 ns
"[    0.101763] futex hash table entries: 1024 (order: 4, 65536 bytes, linear)
"[    0.101763] pinctrl core: initialized pinctrl subsystem
"[    0.101763] NET: Registered PF_NETLINK/PF_ROUTE protocol family
"[    0.102046] DMA: preallocated 2048 KiB GFP_KERNEL pool for atomic allocations
"[    0.102205] DMA: preallocated 2048 KiB GFP_KERNEL|GFP_DMA pool for atomic allocations
"[    0.102361] DMA: preallocated 2048 KiB GFP_KERNEL|GFP_DMA32 pool for atomic allocations
"[    0.102377] audit: initializing netlink subsys (disabled)
"[    0.102394] thermal_sys: Registered thermal governor 'fair_share'
"[    0.102394] thermal_sys: Registered thermal governor 'bang_bang'
"[    0.102394] thermal_sys: Registered thermal governor 'step_wise'
"[    0.102394] thermal_sys: Registered thermal governor 'user_space'
"[    0.102394] thermal_sys: Registered thermal governor 'power_allocator'
"[    0.102394] cpuidle: using governor ladder
"[    0.102394] cpuidle: using governor menu
"[    0.102394] Simple Boot Flag at 0x44 set to 0x80
"[    0.102394] ACPI FADT declares the system doesn't support PCIe ASPM, so disable it
"[    0.102394] acpiphp: ACPI Hot Plug PCI Controller Driver version: 0.5
"[    0.102394] PCI: MMCONFIG for domain 0000 [bus 00-ff] at [mem 0xe0000000-0xefffffff] (base 0xe0000000)
"[    0.102394] PCI: MMCONFIG at [mem 0xe0000000-0xefffffff] reserved in E820
"[    0.102394] PCI: Using configuration type 1 for base access
"[    0.105734] kprobes: kprobe jump-optimization is enabled. All kprobes are optimized if possible.
"[    0.105740] HugeTLB: registered 1.00 GiB page size, pre-allocated 0 pages
"[    0.105740] HugeTLB: 16380 KiB vmemmap can be freed for a 1.00 GiB page
"[    0.105740] HugeTLB: registered 2.00 MiB page size, pre-allocated 0 pages
"[    0.105740] HugeTLB: 28 KiB vmemmap can be freed for a 2.00 MiB page
"[    0.105740] ACPI: Added _OSI(Module Device)
"[    0.105740] ACPI: Added _OSI(Processor Device)
"[    0.105740] ACPI: Added _OSI(3.0 _SCP Extensions)
"[    0.105740] ACPI: Added _OSI(Processor Aggregator Device)
"[    0.140454] ACPI: 8 ACPI AML tables successfully acquired and loaded
"[    0.146506] ACPI: Dynamic OEM Table Load:
"[    0.146521] ACPI: SSDT 0xFFFF8927C0C6D800 0005FD (v02 PmRef  Cpu0Ist  00003000 INTL 20120816)
"[    0.147761] ACPI: \_PR_.CPU0: _OSC native thermal LVT Acked
"[    0.148961] ACPI: Dynamic OEM Table Load:
"[    0.148972] ACPI: SSDT 0xFFFF8927C144D400 00037F (v02 PmRef  Cpu0Cst  00003001 INTL 20120816)
"[    0.150654] ACPI: Dynamic OEM Table Load:
"[    0.150664] ACPI: SSDT 0xFFFF8927C0C6B800 0005AA (v02 PmRef  ApIst    00003000 INTL 20120816)
"[    0.152175] ACPI: Dynamic OEM Table Load:
"[    0.152184] ACPI: SSDT 0xFFFF8927C0EA2A00 000119 (v02 PmRef  ApCst    00003000 INTL 20120816)
"[    0.154929] ACPI: EC: EC started
"[    0.154930] ACPI: EC: interrupt blocked
"[    0.155400] ACPI: EC: EC_CMD/EC_SC=0x66, EC_DATA=0x62
"[    0.155403] ACPI: \_SB_.PCI0.LPCB.EC0_: Boot DSDT EC used to handle transactions
"[    0.155405] ACPI: Interpreter enabled
"[    0.155452] ACPI: PM: (supports S0 S3 S4 S5)
"[    0.155453] ACPI: Using IOAPIC for interrupt routing
"[    0.155497] PCI: Using host bridge windows from ACPI; if necessary, use "pci=nocrs" and report a bug
"[    0.155499] PCI: Using E820 reservations for host bridge windows
"[    0.156033] ACPI: Enabled 10 GPEs in block 00 to 7F
"[    0.177432] ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-fe])
"[    0.177441] acpi PNP0A08:00: _OSC: OS supports [ExtendedConfig ASPM ClockPM Segments MSI HPX-Type3]
"[    0.180392] acpi PNP0A08:00: _OSC: OS now controls [PCIeHotplug SHPCHotplug PME AER PCIeCapability LTR]
"[    0.180395] acpi PNP0A08:00: FADT indicates ASPM is unsupported, using BIOS configuration
"[    0.182852] PCI host bridge to bus 0000:00
"[    0.182854] pci_bus 0000:00: root bus resource [io  0x0000-0x0cf7 window]
"[    0.182858] pci_bus 0000:00: root bus resource [io  0x0d00-0xffff window]
"[    0.182860] pci_bus 0000:00: root bus resource [mem 0x000a0000-0x000bffff window]
"[    0.182862] pci_bus 0000:00: root bus resource [mem 0xad800000-0xdfffffff window]
"[    0.182864] pci_bus 0000:00: root bus resource [mem 0xfd000000-0xfe7fffff window]
"[    0.182866] pci_bus 0000:00: root bus resource [bus 00-fe]
"[    0.182888] pci 0000:00:00.0: [8086:1904] type 00 class 0x060000
"[    0.182983] pci 0000:00:02.0: [8086:1916] type 00 class 0x030000
"[    0.182993] pci 0000:00:02.0: reg 0x10: [mem 0xc0000000-0xc0ffffff 64bit]
"[    0.183001] pci 0000:00:02.0: reg 0x18: [mem 0xb0000000-0xbfffffff 64bit pref]
"[    0.183006] pci 0000:00:02.0: reg 0x20: [io  0x4000-0x403f]
"[    0.183026] pci 0000:00:02.0: Video device with shadowed ROM at [mem 0x000c0000-0x000dffff]
"[    0.183282] pci 0000:00:14.0: [8086:9d2f] type 00 class 0x0c0330
"[    0.183303] pci 0000:00:14.0: reg 0x10: [mem 0xc1200000-0xc120ffff 64bit]
"[    0.183375] pci 0000:00:14.0: PME# supported from D3hot D3cold
"[    0.183674] pci 0000:00:14.2: [8086:9d31] type 00 class 0x118000
"[    0.183694] pci 0000:00:14.2: reg 0x10: [mem 0xc122a000-0xc122afff 64bit]
"[    0.183969] pci 0000:00:15.0: [8086:9d60] type 00 class 0x118000
"[    0.184164] pci 0000:00:15.0: reg 0x10: [mem 0xc122b000-0xc122bfff 64bit]
"[    0.185244] pci 0000:00:16.0: [8086:9d3a] type 00 class 0x078000
"[    0.185263] pci 0000:00:16.0: reg 0x10: [mem 0xc122c000-0xc122cfff 64bit]
"[    0.185339] pci 0000:00:16.0: PME# supported from D3hot
"[    0.185588] pci 0000:00:17.0: [8086:9d03] type 00 class 0x010601
"[    0.185603] pci 0000:00:17.0: reg 0x10: [mem 0xc1228000-0xc1229fff]
"[    0.185611] pci 0000:00:17.0: reg 0x14: [mem 0xc122f000-0xc122f0ff]
"[    0.185620] pci 0000:00:17.0: reg 0x18: [io  0x4080-0x4087]
"[    0.185629] pci 0000:00:17.0: reg 0x1c: [io  0x4088-0x408b]
"[    0.185638] pci 0000:00:17.0: reg 0x20: [io  0x4060-0x407f]
"[    0.185647] pci 0000:00:17.0: reg 0x24: [mem 0xc122d000-0xc122d7ff]
"[    0.185692] pci 0000:00:17.0: PME# supported from D3hot
"[    0.185982] pci 0000:00:1d.0: [8086:9d18] type 01 class 0x060400
"[    0.186057] pci 0000:00:1d.0: PME# supported from D0 D3hot D3cold
"[    0.186592] pci 0000:00:1d.2: [8086:9d1a] type 01 class 0x060400
"[    0.186674] pci 0000:00:1d.2: PME# supported from D0 D3hot D3cold
"[    0.186693] pci 0000:00:1d.2: Intel SPT PCH root port ACS workaround enabled
"[    0.187215] pci 0000:00:1d.3: [8086:9d1b] type 01 class 0x060400
"[    0.187296] pci 0000:00:1d.3: PME# supported from D0 D3hot D3cold
"[    0.187315] pci 0000:00:1d.3: Intel SPT PCH root port ACS workaround enabled
"[    0.187850] pci 0000:00:1f.0: [8086:9d48] type 00 class 0x060100
"[    0.188207] pci 0000:00:1f.2: [8086:9d21] type 00 class 0x058000
"[    0.188224] pci 0000:00:1f.2: reg 0x10: [mem 0xc1224000-0xc1227fff]
"[    0.188512] pci 0000:00:1f.3: [8086:9d70] type 00 class 0x040300
"[    0.188538] pci 0000:00:1f.3: reg 0x10: [mem 0xc1220000-0xc1223fff 64bit]
"[    0.188574] pci 0000:00:1f.3: reg 0x20: [mem 0xc1210000-0xc121ffff 64bit]
"[    0.188628] pci 0000:00:1f.3: PME# supported from D3hot D3cold
"[    0.189076] pci 0000:00:1f.4: [8086:9d23] type 00 class 0x0c0500
"[    0.189134] pci 0000:00:1f.4: reg 0x10: [mem 0xc122e000-0xc122e0ff 64bit]
"[    0.189204] pci 0000:00:1f.4: reg 0x20: [io  0x4040-0x405f]
"[    0.189539] pci 0000:00:1d.0: PCI bridge to [bus 01]
"[    0.189650] pci 0000:02:00.0: [8086:095a] type 00 class 0x028000
"[    0.189700] pci 0000:02:00.0: reg 0x10: [mem 0xc1100000-0xc1101fff 64bit]
"[    0.189930] pci 0000:02:00.0: PME# supported from D0 D3hot D3cold
"[    0.190252] pci 0000:00:1d.2: PCI bridge to [bus 02]
"[    0.190257] pci 0000:00:1d.2:   bridge window [mem 0xc1100000-0xc11fffff]
"[    0.190324] pci 0000:03:00.0: [10ec:5287] type 00 class 0xff0000
"[    0.190346] pci 0000:03:00.0: reg 0x10: [mem 0xc1005000-0xc1005fff]
"[    0.190411] pci 0000:03:00.0: reg 0x30: [mem 0xffff0000-0xffffffff pref]
"[    0.190514] pci 0000:03:00.0: supports D1 D2
"[    0.190516] pci 0000:03:00.0: PME# supported from D1 D2 D3hot D3cold
"[    0.190733] pci 0000:03:00.1: [10ec:8168] type 00 class 0x020000
"[    0.190754] pci 0000:03:00.1: reg 0x10: [io  0x3000-0x30ff]
"[    0.190782] pci 0000:03:00.1: reg 0x18: [mem 0xc1004000-0xc1004fff 64bit]
"[    0.190800] pci 0000:03:00.1: reg 0x20: [mem 0xc1000000-0xc1003fff 64bit]
"[    0.190913] pci 0000:03:00.1: supports D1 D2
"[    0.190914] pci 0000:03:00.1: PME# supported from D0 D1 D2 D3hot D3cold
"[    0.191086] pci 0000:00:1d.3: PCI bridge to [bus 03]
"[    0.191090] pci 0000:00:1d.3:   bridge window [io  0x3000-0x3fff]
"[    0.191093] pci 0000:00:1d.3:   bridge window [mem 0xc1000000-0xc10fffff]
"[    0.192499] ACPI: PCI: Interrupt link LNKA configured for IRQ 11
"[    0.192561] ACPI: PCI: Interrupt link LNKB configured for IRQ 10
"[    0.192620] ACPI: PCI: Interrupt link LNKC configured for IRQ 11
"[    0.192680] ACPI: PCI: Interrupt link LNKD configured for IRQ 11
"[    0.192738] ACPI: PCI: Interrupt link LNKE configured for IRQ 11
"[    0.192796] ACPI: PCI: Interrupt link LNKF configured for IRQ 11
"[    0.192854] ACPI: PCI: Interrupt link LNKG configured for IRQ 11
"[    0.192911] ACPI: PCI: Interrupt link LNKH configured for IRQ 11
"[    0.193715] ACPI: EC: interrupt unblocked
"[    0.193716] ACPI: EC: event unblocked
"[    0.193734] ACPI: EC: EC_CMD/EC_SC=0x66, EC_DATA=0x62
"[    0.193735] ACPI: EC: GPE=0x50
"[    0.193737] ACPI: \_SB_.PCI0.LPCB.EC0_: Boot DSDT EC initialization complete
"[    0.193739] ACPI: \_SB_.PCI0.LPCB.EC0_: EC: Used to handle transactions and events
"[    0.193810] iommu: Default domain type: Translated 
"[    0.193810] iommu: DMA domain TLB invalidation policy: lazy mode 
"[    0.193810] pps_core: LinuxPPS API ver. 1 registered
"[    0.193810] pps_core: Software ver. 5.3.6 - Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>
"[    0.193810] PTP clock support registered
"[    0.193810] EDAC MC: Ver: 3.0.0
"[    0.193810] NetLabel: Initializing
"[    0.193810] NetLabel:  domain hash size = 128
"[    0.193810] NetLabel:  protocols = UNLABELED CIPSOv4 CALIPSO
"[    0.193810] NetLabel:  unlabeled traffic allowed by default
"[    0.193810] PCI: Using ACPI for IRQ routing
"[    0.221446] pci 0000:00:02.0: vgaarb: setting as boot VGA device
"[    0.221446] pci 0000:00:02.0: vgaarb: bridge control possible
"[    0.221446] pci 0000:00:02.0: vgaarb: VGA device added: decodes=io+mem,owns=io+mem,locks=none
"[    0.221446] vgaarb: loaded
"[    0.222923] clocksource: Switched to clocksource tsc-early
"[    0.223072] VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
"[    0.223215] AppArmor: AppArmor Filesystem Enabled
"[    0.223235] pnp: PnP ACPI init
"[    0.223413] system 00:00: [mem 0xfd000000-0xfdabffff] has been reserved
"[    0.223418] system 00:00: [mem 0xfdad0000-0xfdadffff] has been reserved
"[    0.223421] system 00:00: [mem 0xfdb00000-0xfdffffff] has been reserved
"[    0.223423] system 00:00: [mem 0xfe000000-0xfe01ffff] has been reserved
"[    0.223426] system 00:00: [mem 0xfe036000-0xfe03bfff] has been reserved
"[    0.223428] system 00:00: [mem 0xfe03d000-0xfe3fffff] has been reserved
"[    0.223431] system 00:00: [mem 0xfe410000-0xfe7fffff] has been reserved
"[    0.223788] system 00:01: [io  0x2000-0x20fe] has been reserved
"[    0.223958] system 00:02: [io  0x0680-0x069f] has been reserved
"[    0.223961] system 00:02: [io  0xffff] has been reserved
"[    0.223963] system 00:02: [io  0xffff] has been reserved
"[    0.223965] system 00:02: [io  0xffff] has been reserved
"[    0.223967] system 00:02: [io  0x1800-0x18fe] has been reserved
"[    0.223969] system 00:02: [io  0x164e-0x164f] has been reserved
"[    0.224124] system 00:04: [io  0x1854-0x1857] has been reserved
"[    0.224124] system 00:06: [mem 0xfdaf0000-0xfdafffff] has been reserved
"[    0.224124] system 00:06: [mem 0xfdae0000-0xfdaeffff] has been reserved
"[    0.224124] system 00:06: [mem 0xfdac0000-0xfdacffff] has been reserved
"[    0.224235] system 00:07: [mem 0xfed10000-0xfed17fff] has been reserved
"[    0.224239] system 00:07: [mem 0xfed18000-0xfed18fff] has been reserved
"[    0.224241] system 00:07: [mem 0xfed19000-0xfed19fff] has been reserved
"[    0.224244] system 00:07: [mem 0xe0000000-0xefffffff] has been reserved
"[    0.224247] system 00:07: [mem 0xfed20000-0xfed3ffff] has been reserved
"[    0.224249] system 00:07: [mem 0xfed90000-0xfed93fff] could not be reserved
"[    0.224251] system 00:07: [mem 0xfed45000-0xfed8ffff] could not be reserved
"[    0.224254] system 00:07: [mem 0xff000000-0xffffffff] could not be reserved
"[    0.224256] system 00:07: [mem 0xfee00000-0xfeefffff] could not be reserved
"[    0.224259] system 00:07: [mem 0xad800000-0xad81ffff] has been reserved
"[    0.224535] pnp: PnP ACPI: found 8 devices
"[    0.230734] clocksource: acpi_pm: mask: 0xffffff ma"x_cycles: 0xffffff, max_idle_ns: 2085701024 ns
"[    0.230823] NET: Registered PF_INET protocol family
"[    0.231012] IP idents hash table entries: 262144 (order: 9, 2097152 bytes, linear)
"[    0.234797] tcp_listen_portaddr_hash hash table entries: 8192 (order: 5, 131072 bytes, linear)
"[    0.234833] Table-perturb hash table entries: 65536 (order: 6, 262144 bytes, linear)
"[    0.234914] TCP established hash table entries: 131072 (order: 8, 1048576 bytes, linear)
"[    0.235182] TCP bind hash table entries: 65536 (order: 9, 2097152 bytes, linear)
"[    0.235507] TCP: Hash tables configured (established 131072 bind 65536)
"[    0.235602] MPTCP token hash table entries: 16384 (order: 6, 393216 bytes, linear)
"[    0.235696] UDP hash table entries: 8192 (order: 6, 262144 bytes, linear)
"[    0.235745] UDP-Lite hash table entries: 8192 (order: 6, 262144 bytes, linear)
"[    0.235817] NET: Registered PF_UNIX/PF_LOCAL protocol family
"[    0.235825] NET: Registered PF_XDP protocol family
"[    0.235831] pci 0000:03:00.0: can't claim BAR 6 [mem 0xffff0000-0xffffffff pref]: no compatible bridge window
"[    0.235844] pci 0000:00:1d.0: PCI bridge to [bus 01]
"[    0.235855] pci 0000:00:1d.2: PCI bridge to [bus 02]
"[    0.235859] pci 0000:00:1d.2:   bridge window [mem 0xc1100000-0xc11fffff]
"[    0.235868] pci 0000:03:00.0: BAR 6: assigned [mem 0xc1010000-0xc101ffff pref]
"[    0.235871] pci 0000:00:1d.3: PCI bridge to [bus 03]
"[    0.235874] pci 0000:00:1d.3:   bridge window [io  0x3000-0x3fff]
"[    0.235878] pci 0000:00:1d.3:   bridge window [mem 0xc1000000-0xc10fffff]
"[    0.235885] pci_bus 0000:00: resource 4 [io  0x0000-0x0cf7 window]
"[    0.235888] pci_bus 0000:00: resource 5 [io  0x0d00-0xffff window]
"[    0.235890] pci_bus 0000:00: resource 6 [mem 0x000a0000-0x000bffff window]
"[    0.235892] pci_bus 0000:00: resource 7 [mem 0xad800000-0xdfffffff window]
"[    0.235894] pci_bus 0000:00: resource 8 [mem 0xfd000000-0xfe7fffff window]
"[    0.235896] pci_bus 0000:02: resource 1 [mem 0xc1100000-0xc11fffff]
"[    0.235898] pci_bus 0000:03: resource 0 [io  0x3000-0x3fff]
"[    0.235900] pci_bus 0000:03: resource 1 [mem 0xc1000000-0xc10fffff]
"[    0.237604] PCI: CLS 64 bytes, default 64
"[    0.237650] pci 0000:00:1f.1: [8086:9d20] type 00 class 0x058000
"[    0.237709] pci 0000:00:1f.1: reg 0x10: [mem 0xfd000000-0xfdffffff 64bit]
"[    0.237964] DMAR: ACPI device "device:6a" under DMAR at fed91000 as 00:15.0
"[    0.237974] DMAR: No ATSR found
"[    0.237975] DMAR: No SATC found
"[    0.237976] DMAR: IOMMU feature fl1gp_support inconsistent
"[    0.237978] DMAR: IOMMU feature pgsel_inv inconsistent
"[    0.237979] DMAR: IOMMU feature nwfs inconsistent
"[    0.237980] DMAR: IOMMU feature eafs inconsistent
"[    0.237981] DMAR: IOMMU feature prs inconsistent
"[    0.237982] DMAR: IOMMU feature nest inconsistent
"[    0.237982] DMAR: IOMMU feature mts inconsistent
"[    0.237983] DMAR: IOMMU feature sc_support inconsistent
"[    0.237984] DMAR: IOMMU feature dev_iotlb_support inconsistent
"[    0.237986] DMAR: dmar0: Using Queued invalidation
"[    0.237989] DMAR: dmar1: Using Queued invalidation
"[    0.238012] Trying to unpack rootfs image as initramfs...
"[    0.238143] pci 0000:00:02.0: Adding to iommu group 0
"[    0.238180] pci 0000:00:00.0: Adding to iommu group 1
"[    0.238196] pci 0000:00:14.0: Adding to iommu group 2
"[    0.238204] pci 0000:00:14.2: Adding to iommu group 2
"[    0.238217] pci 0000:00:15.0: Adding to iommu group 3
"[    0.238228] pci 0000:00:16.0: Adding to iommu group 4
"[    0.238239] pci 0000:00:17.0: Adding to iommu group 5
"[    0.238259] pci 0000:00:1d.0: Adding to iommu group 6
"[    0.238271] pci 0000:00:1d.2: Adding to iommu group 7
"[    0.238282] pci 0000:00:1d.3: Adding to iommu group 8
"[    0.238303] pci 0000:00:1f.0: Adding to iommu group 9
"[    0.238313] pci 0000:00:1f.2: Adding to iommu group 9
"[    0.238322] pci 0000:00:1f.3: Adding to iommu group 9
"[    0.238331] pci 0000:00:1f.4: Adding to iommu group 9
"[    0.238343] pci 0000:02:00.0: Adding to iommu group 10
"[    0.238359] pci 0000:03:00.0: Adding to iommu group 11
"[    0.238371] pci 0000:03:00.1: Adding to iommu group 11
"[    0.239266] DMAR: Intel(R) Virtualization Technology for Directed I/O
"[    0.239269] PCI-DMA: Using software bounce buffering for IO (SWIOTLB)
"[    0.239270] software IO TLB: mapped [mem 0x00000000a338f000-0x00000000a738f000] (64MB)
"[    0.239837] workingset: timestamp_bits=36 max_order=22 bucket_order=0
"[    0.242415] zbud: loaded
"[    0.823571] Freeing initrd memory: 74856K
"[    0.830078] alg: self-tests for CTR-KDF (hmac(sha256)) passed
"[    0.830101] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 248)
"[    0.830136] io scheduler mq-deadline registered
"[    0.831267] pcieport 0000:00:1d.0: PME: Signaling with IRQ 122
"[    0.831506] pcieport 0000:00:1d.2: PME: Signaling with IRQ 123
"[    0.831721] pcieport 0000:00:1d.3: PME: Signaling with IRQ 124
"[    0.831812] shpchp: Standard Hot Plug PCI Controller Driver version: 0.4
"[    0.832781] thermal LNXTHERM:00: registered as thermal_zone0
"[    0.832784] ACPI: thermal: Thermal Zone [TZ01] (26 C)
"[    0.832946] Serial: 8250/16550 driver, 4 ports, IRQ sharing enabled
"[    0.833641] Linux agpgart interface v0.103
"[    0.833850] AMD-Vi: AMD IOMMUv2 functionality not available on this system - This is not a bug.
"[    0.834151] i8042: PNP: PS/2 Controller [PNP0303:PS2K] at 0x60,0x64 irq 1
"[    0.835219] serio: i8042 KBD port at 0x60,0x64 irq 1
"[    0.835387] mousedev: PS/2 mouse device common for all mice
"[    0.835421] rtc_cmos 00:03: RTC can wake from S4
"[    0.836211] rtc_cmos 00:03: registered as rtc0
"[    0.836339] rtc_cmos 00:03: setting system clock to 2025-01-03T20:35:01 UTC (1735936501)
"[    0.836366] rtc_cmos 00:03: alarms up to one month, y3k, 242 bytes nvram
"[    0.836500] intel_pstate: Intel P-state driver initializing
"[    0.836745] intel_pstate: HWP enabled
"[    0.836778] ledtrig-cpu: registered to indicate activity on CPUs
"[    0.837371] input: AT Translated Set 2 keyboard as /devices/platform/i8042/serio0/input/input0
"[    0.851865] NET: Registered PF_INET6 protocol family
"[    0.858086] Segment Routing with IPv6
"[    0.858099] In-situ OAM (IOAM) with IPv6
"[    0.858132] mip6: Mobile IPv6
"[    0.858136] NET: Registered PF_PACKET protocol family
"[    0.858173] mpls_gso: MPLS GSO support
"[    0.858745] microcode: sig=0x406e3, pf=0x80, revision=0xf0
"[    0.858762] microcode: Microcode Update Driver: v2.2.
"[    0.858769] IPI shorthand broadcast: enabled
"[    0.858795] sched_clock: Marking stable (850570760, 8073617)->(889663929, -31019552)
"[    0.859034] registered taskstats version 1
"[    0.880315] zswap: loaded using pool lzo/zbud
"[    0.886373] AppArmor: AppArmor sha1 policy hashing enabled
"[    0.886382] ima: No TPM chip found, activating TPM-bypass!
"[    0.886383] ima: Allocated hash algorithm: sha256
"[    0.886393] ima: No architecture policies found
"[    0.886408] evm: Initialising EVM extended attributes:
"[    0.886409] evm: security.selinux
"[    0.886410] evm: security.SMACK64 (disabled)
"[    0.886411] evm: security.SMACK64EXEC (disabled)
"[    0.886412] evm: security.SMACK64TRANSMUTE (disabled)
"[    0.886413] evm: security.SMACK64MMAP (disabled)
"[    0.886414] evm: security.apparmor
"[    0.886415] evm: security.ima
"[    0.886416] evm: security.capability
"[    0.886417] evm: HMAC attrs: 0x1
"[    0.994139] clk: Disabling unused clocks
"[    0.995192] Freeing unused decrypted memory: 2036K
"[    0.995711] Freeing unused kernel image (initmem) memory: 2800K
"[    0.995794] Write protecting the kernel read-only data: 26624k
"[    0.996455] Freeing unused kernel image (text/rodata gap) memory: 2040K
"[    0.996762] Freeing unused kernel image (rodata/data gap) memory: 1160K
"[    1.064086] x86/mm: Checked W+X mappings: passed, no W+X pages found.
"[    1.064088] x86/mm: Checking user space page tables
"[    1.125275] x86/mm: Checked W+X mappings: passed, no W+X pages found.
"[    1.125279] Run /init as init process
"[    1.260087] tsc: Refined TSC clocksource calibration: 2303.999 MHz
"[    1.260096] clocksource: tsc: mask: 0xffffffffffffffff max_cycles: 0x2135f6faae8, max_idle_ns: 440795313647 ns
"[    1.260115] clocksource: Switched to clocksource tsc
"[    1.275526] input: Power Button as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0C:00/input/input1
"[    1.275575] ACPI: button: Power Button [PWRB]
"[    1.275645] input: Sleep Button as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0E:00/input/input2
"[    1.275680] ACPI: button: Sleep Button [SLPB]
"[    1.275737] input: Lid Switch as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0D:00/input/input3
"[    1.275778] ACPI: button: Lid Switch [LID0]
"[    1.275851] input: Power Button as /devices/LNXSYSTM:00/LNXPWRBN:00/input/input4
"[    1.275940] ACPI: button: Power Button [PWRF]
"[    1.312701] ACPI: battery: Slot [BAT1] (battery present)
"[    1.319836] intel-lpss 0000:00:15.0: enabling device (0000 -> 0002)
"[    1.320053] platform idma64.0: Adding to iommu group 12
"[    1.320227] idma64 idma64.0: Found Intel integrated DMA 64-bit
"[    1.325990] hid: raw HID events driver (C) Jiri Kosina
"[    1.339816] i801_smbus 0000:00:1f.4: SPD Write Disable is set
"[    1.339848] i801_smbus 0000:00:1f.4: SMBus using PCI interrupt
"[    1.341031] i2c i2c-0: 2/4 memory slots populated (from DMI)
"[    1.341817] i2c i2c-0: Successfully instantiated SPD at 0x50
"[    1.344223] i2c i2c-0: Successfully instantiated SPD at 0x52
"[    1.345269] platform i2c_designware.0: Adding to iommu group 13
"[    1.387735] ACPI: bus type drm_connector registered
"[    1.402010] ACPI: bus type USB registered
"[    1.404319] r8169 0000:03:00.1 eth0: RTL8411b, a8:1e:84:89:dd:72, XID 5c8, IRQ 126
"[    1.404325] r8169 0000:03:00.1 eth0: jumbo features [frames: 9194 bytes, tx checksumming: ko]
"[    1.405967] usbcore: registered new interface driver usbfs
"[    1.405986] usbcore: registered new interface driver hub
"[    1.406003] usbcore: registered new device driver usb
"[    1.580224] r8169 0000:03:00.1 enp3s0f1: renamed from eth0
"[    1.594413] input: SYNA7DB5:00 06CB:7DB7 Mouse as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-SYNA7DB5:00/0018:06CB:7DB7.0001/input/input5"
"[    1.594651] input: SYNA7DB5:00 06CB:7DB7 Touchpad as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-SYNA7DB5:00/0018:06CB:7DB7.0001/input/input6
"[    1.594858] hid-generic 0018:06CB:7DB7.0001: input,hidraw0: I2C HID v1.00 Mouse [SYNA7DB5:00 06CB:7DB7] on i2c-SYNA7DB5:00
"[    1.650265] xhci_hcd 0000:00:14.0: xHCI Host Controller
"[    1.650281] xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 1
"[    1.651568] xhci_hcd 0000:00:14.0: hcc params 0x200077c1 hci version 0x100 quirks 0x0000000081109810
"[    1.652163] xhci_hcd 0000:00:14.0: xHCI Host Controller
"[    1.652172] xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 2
"[    1.652178] xhci_hcd 0000:00:14.0: Host supports USB 3.0 SuperSpeed
"[    1.652245] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 6.01
"[    1.652252] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
"[    1.652256] usb usb1: Product: xHCI Host Controller
"[    1.652259] usb usb1: Manufacturer: Linux 6.1.0-28-amd64 xhci-hcd
"[    1.652262] usb usb1: SerialNumber: 0000:00:14.0
"[    1.652537] hub 1-0:1.0: USB hub found
"[    1.652560] hub 1-0:1.0: 12 ports detected
"[    1.656223] usb usb2: New USB device found, idVendor=1d6b, idProduct=0003, bcdDevice= 6.01
"[    1.656231] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
"[    1.656236] usb usb2: Product: xHCI Host Controller
"[    1.656239] usb usb2: Manufacturer: Linux 6.1.0-28-amd64 xhci-hcd
"[    1.656243] usb usb2: SerialNumber: 0000:00:14.0
"[    1.657235] hub 2-0:1.0: USB hub found
"[    1.657254] hub 2-0:1.0: 6 ports detected
"[    1.672311] ahci 0000:00:17.0: AHCI 0001.0301 32 slots 3 ports 6 Gbps 0x7 impl SATA mode
"[    1.672318] ahci 0000:00:17.0: flags: 64bit ncq pm led clo only pio slum part deso sadm sds apst 
"[    1.672770] scsi host0: ahci
"[    1.672943] scsi host1: ahci
"[    1.673136] scsi host2: ahci
"[    1.673210] ata1: SATA max UDMA/133 abar m2048@0xc122d000 port 0xc122d100 irq 128
"[    1.673215] ata2: SATA max UDMA/133 abar m2048@0xc122d000 port 0xc122d180 irq 128
"[    1.673218] ata3: SATA max UDMA/133 abar m2048@0xc122d000 port 0xc122d200 irq 128
"[    1.695840] input: SYNA7DB5:00 06CB:7DB7 Mouse as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-SYNA7DB5:00/0018:06CB:7DB7.0001/input/input8
"[    1.695911] input: SYNA7DB5:00 06CB:7DB7 Touchpad as /devices/pci0000:00/0000:00:15.0/i2c_designware.0/i2c-1/i2c-SYNA7DB5:00/0018:06CB:7DB7.0001/input/input9
"[    1.695984] hid-multitouch 0018:06CB:7DB7.0001: input,hidraw0: I2C HID v1.00 Mouse [SYNA7DB5:00 06CB:7DB7] on i2c-SYNA7DB5:00
"[    1.908515] usb 1-5: new full-speed USB device number 2 using xhci_hcd
"[    1.986825] ata1: SATA link up 6.0 Gbps (SStatus 133 SControl 300)
"[    1.987178] ata1.00: ATA-10: Micron_1100_MTFDDAK512TBN,  M0MA020, max UDMA/133
"[    1.987526] ata3: SATA link up 6.0 Gbps (SStatus 133 SControl 300)
"[    1.987570] ata2: SATA link up 1.5 Gbps (SStatus 113 SControl 300)
"[    1.989316] ata1.00: 1000215216 sectors, multi 16: LBA48 NCQ (depth 32), AA
"[    1.990183] ata2.00: ATAPI: HL-DT-ST DVDRAM GUE1N, 1.00, max UDMA/133
"[    1.990831] ata1.00: Features: Dev-Sleep NCQ-sndrcv NCQ-prio
"[    1.991216] ata3.00: ATA-8: LITEON CV3-8D256, T881202, max UDMA/133
"[    1.991317] ata3.00: 500118192 sectors, multi 0: LBA48 NCQ (depth 32), AA
"[    1.991929] ata3.00: Features: Dev-Sleep
"[    1.992951] ata3.00: configured for UDMA/133
"[    1.992968] ahci 0000:00:17.0: port does not support device sleep
"[    1.993037] ata2.00: configured for UDMA/133
"[    1.995155] ata1.00: configured for UDMA/133
"[    2.005236] ahci 0000:00:17.0: port does not support device sleep
"[    2.063661] usb 1-5: New USB device found, idVendor=8087, idProduct=0a2a, bcdDevice= 0.01
"[    2.063708] usb 1-5: New USB device strings: Mfr=0, Product=0, SerialNumber=0
"[    2.142871] ata1.00: Enabling discard_zeroes_data
"[    2.143102] sd 0:0:0:0: [sda] Preferred minimum I/O size 512 bytes
"[    2.143804] ata1.00: Enabling discard_zeroes_data
"[    2.148554]  sda: sda1 sda2 < sda5 sda6 sda7 sda8 >
"[    2.232086] usb 1-7: new high-speed USB device number 3 using xhci_hcd
"[    2.279478] sr 1:0:0:0: [sr0] scsi3-mmc drive: 24x/24x writer dvd-ram cd/rw xa/form2 cdda tray
"[    2.279484] cdrom: Uniform CD-ROM driver Revision: 3.20
"[    2.387870] usb 1-7: New USB device found, idVendor=04f2, idProduct=b571, bcdDevice=99.52
"[    2.387874] usb 1-7: New USB device strings: Mfr=1, Product=2, SerialNumber=0
"[    2.387876] usb 1-7: Product: HD WebCam
"[    2.387887] usb 1-7: Manufacturer: Chicony Electronics Co.,Ltd.
"[    2.618374] i915 0000:00:02.0: [drm] VT-d active for gfx access
"[    2.618697] i915 0000:00:02.0: vgaarb: deactivate vga console
"[    2.618790] sd 2:0:0:0: [sdb] Preferred minimum I/O size 512 bytes
"[    2.621179] Console: switching to colour dummy device 80x25
"[    2.621866] i915 0000:00:02.0: [drm] Using Transparent Hugepages
"[    2.623720] i915 0000:00:02.0: vgaarb: changed VGA decodes: olddecodes=io+mem,decodes=io+mem:owns=io+mem
"[    2.623768] i915 0000:00:02.0: firmware: direct-loading firmware i915/skl_dmc_ver1_27.bin
"[    2.624102] i915 0000:00:02.0: [drm] Finished loading DMC firmware i915/skl_dmc_ver1_27.bin (v1.27)
"[    2.624145] i915 0000:00:02.0: [drm] Disabling framebuffer compression (FBC) to prevent screen flicker with VT-d enabled
"[    2.626357]  sdb: sdb1 sdb2 < sdb5 sdb6 sdb7 sdb8 >
"[    2.663569] [drm] Initialized i915 1.6.0 20201103 for 0000:00:02.0 on minor 0
"[    2.666675] ACPI: video: Video Device [GFX0] (multi-head: yes  rom: no  post: no)
"[    2.666960] input: Video Bus as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/LNXVIDEO:00/input/input11
"[    2.672091] fbcon: i915drmfb (fb0) is primary device
"[    3.904741] Console: switching to colour frame buffer device 170x48
"[    3.924516] i915 0000:00:02.0: [drm] fb0: i915drmfb frame buffer device
"[    4.230242] EXT4-fs (sda1): mounted filesystem with ordered data mode. Quota mode: none.
"[    4.334892] Not activating Mandatory Access Control as /sbin/tomoyo-init does not exist.
"[    4.471514] systemd[1]: Inserted module 'autofs4'
"[    4.499271] systemd[1]: systemd 252.31-1~deb12u1 running in system mode (+PAM +AUDIT +SELINUX +APPARMOR +IMA +SMACK +SECCOMP +GCRYPT -GNUTLS +OPENSSL +ACL +BLKID +CURL +ELFUTILS +FIDO2 +IDN2 -IDN +IPTC +KMOD +LIBCRYPTSETUP +LIBFDISK +PCRE2 -PWQUALITY +P11KIT +QRENCODE +TPM2 +BZIP2 +LZ4 +XZ +ZLIB +ZSTD -BPF_FRAMEWORK -XKBCOMMON +UTMP +SYSVINIT default-hierarchy=unified)
"[    4.499280] systemd[1]: Detected architecture x86-64.
"[    4.501227] systemd[1]: Hostname set to <pinguinkampfer>.
"[    5.011485] systemd[1]: Queued start job for default target graphical.target.
"[    5.033223] systemd[1]: Created slice system-getty.slice - Slice /system/getty.
"[    5.033671] systemd[1]: Created slice system-modprobe.slice - Slice /system/modprobe.
"[    5.034055] systemd[1]: Created slice system-systemd\x2dfsck.slice - Slice /system/systemd-fsck.
"[    5.034352] systemd[1]: Created slice user.slice - User and Session Slice.
"[    5.034455] systemd[1]: Started systemd-ask-password-wall.path - Forward Password Requests to Wall Directory Watch.
"[    5.034674] systemd[1]: Set up automount proc-sys-fs-binfmt_misc.automount - Arbitrary Executable File Formats File System Automount Point.
"[    5.034702] systemd[1]: Expecting device dev-disk-by\x2duuid-0ea72052\x2d1516\x2d418b\x2dbde5\x2d6836d5b0fe1a.device - /dev/disk/by-uuid/0ea72052-1516-418b-bde5-6836d5b0fe1a...
"[    5.034712] systemd[1]: Expecting device dev-disk-by\x2duuid-648f9c0c\x2d1cf3\x2d44fb\x2d90be\x2d385b81bc743b.device - /dev/disk/by-uuid/648f9c0c-1cf3-44fb-90be-385b81bc743b...
"[    5.034721] systemd[1]: Expecting device dev-disk-by\x2duuid-d05861e1\x2d6ce8\x2d4866\x2d8402\x2d2af75b071e14.device - /dev/disk/by-uuid/d05861e1-6ce8-4866-8402-2af75b071e14...
"[    5.034730] systemd[1]: Expecting device dev-disk-by\x2duuid-d9a1d48b\x2d8aa8\x2d4551\x2da5e4\x2d09966e41481b.device - /dev/disk/by-uuid/d9a1d48b-8aa8-4551-a5e4-09966e41481b...
"[    5.034761] systemd[1]: Reached target integritysetup.target - Local Integrity Protected Volumes.
"[    5.034794] systemd[1]: Reached target nss-user-lookup.target - User and Group Name Lookups.
"[    5.034810] systemd[1]: Reached target remote-fs.target - Remote File Systems.
"[    5.034824] systemd[1]: Reached target slices.target - Slice Units.
"[    5.034856] systemd[1]: Reached target veritysetup.target - Local Verity Protected Volumes.
"[    5.038274] systemd[1]: Listening on systemd-coredump.socket - Process Core Dump Socket.
"[    5.038414] systemd[1]: Listening on systemd-fsckd.socket - fsck to fsckd communication Socket.
"[    5.038498] systemd[1]: Listening on systemd-initctl.socket - initctl Compatibility Named Pipe.
"[    5.038951] systemd[1]: Listening on systemd-journald-audit.socket - Journal Audit Socket.
"[    5.039147] systemd[1]: Listening on systemd-journald-dev-log.socket - Journal Socket (/dev/log).
"[    5.039349] systemd[1]: Listening on systemd-journald.socket - Journal Socket.
"[    5.039746] systemd[1]: Listening on systemd-udevd-control.socket - udev Control Socket.
"[    5.039901] systemd[1]: Listening on systemd-udevd-kernel.socket - udev Kernel Socket.
"[    5.041109] systemd[1]: Mounting dev-hugepages.mount - Huge Pages File System...
"[    5.042293] systemd[1]: Mounting dev-mqueue.mount - POSIX Message Queue File System...
"[    5.043688] systemd[1]: Mounting sys-kernel-debug.mount - Kernel Debug File System...
"[    5.046021] systemd[1]: Mounting sys-kernel-tracing.mount - Kernel Trace File System...
"[    5.048066] systemd[1]: Starting keyboard-setup.service - Set the console keyboard layout...
"[    5.049824] systemd[1]: Starting kmod-static-nodes.service - Create List of Static Device Nodes...
"[    5.051557] systemd[1]: Starting modprobe@configfs.service - Load Kernel Module configfs...
"[    5.054437] systemd[1]: Starting modprobe@dm_mod.service - Load Kernel Module dm_mod...
"[    5.056373] systemd[1]: Starting modprobe@drm.service - Load Kernel Module drm...
"[    5.058511] systemd[1]: Starting modprobe@efi_pstore.service - Load Kernel Module efi_pstore...
"[    5.061118] systemd[1]: Starting modprobe@fuse.service - Load Kernel Module fuse...
"[    5.063353] systemd[1]: Starting modprobe@loop.service - Load Kernel Module loop...
"[    5.063702] systemd[1]: systemd-fsck-root.service - File System Check on Root Device was skipped because of an unmet condition check (ConditionPathExists=!/run/initramfs/fsck-root).
"[    5.066884] systemd[1]: Starting systemd-journald.service - Journal Service...
"[    5.073585] systemd[1]: Starting systemd-modules-load.service - Load Kernel Modules...
"[    5.075203] systemd[1]: Starting systemd-remount-fs.service - Remount Root and Kernel File Systems...
"[    5.076961] systemd[1]: Starting systemd-udev-trigger.service - Coldplug All udev Devices...
"[    5.080766] systemd[1]: Mounted dev-hugepages.mount - Huge Pages File System.
"[    5.081140] systemd[1]: Mounted dev-mqueue.mount - POSIX Message Queue File System.
"[    5.081474] systemd[1]: Mounted sys-kernel-debug.mount - Kernel Debug File System.
"[    5.081799] systemd[1]: Mounted sys-kernel-tracing.mount - Kernel Trace File System.
"[    5.082280] systemd[1]: Finished kmod-static-nodes.service - Create List of Static Device Nodes.
"[    5.082968] systemd[1]: modprobe@configfs.service: Deactivated successfully.
"[    5.083167] systemd[1]: Finished modprobe@configfs.service - Load Kernel Module configfs.
"[    5.083594] systemd[1]: modprobe@drm.service: Deactivated successfully.
"[    5.083786] systemd[1]: Finished modprobe@drm.service - Load Kernel Module drm.
"[    5.085766] systemd[1]: Mounting sys-kernel-config.mount - Kernel Configuration File System...
"[    5.087400] fuse: init (API version 7.38)
"[    5.094901] systemd[1]: modprobe@efi_pstore.service: Deactivated successfully.
"[    5.095220] systemd[1]: Finished modprobe@efi_pstore.service - Load Kernel Module efi_pstore.
"[    5.095863] systemd[1]: modprobe@fuse.service: Deactivated successfully.
"[    5.096176] systemd[1]: Finished modprobe@fuse.service - Load Kernel Module fuse.
"[    5.098372] systemd[1]: Mounting sys-fs-fuse-connections.mount - FUSE Control File System...
"[    5.103464] device-mapper: uevent: version 1.0.3
"[    5.103571] device-mapper: ioctl: 4.47.0-ioctl (2022-07-28) initialised: dm-devel@redhat.com
"[    5.105601] systemd[1]: modprobe@dm_mod.service: Deactivated successfully.
"[    5.105920] systemd[1]: Finished modprobe@dm_mod.service - Load Kernel Module dm_mod.
"[    5.107903] systemd[1]: Mounted sys-kernel-config.mount - Kernel Configuration File System.
"[    5.108739] loop: module loaded
"[    5.109874] systemd[1]: modprobe@loop.service: Deactivated successfully.
"[    5.110159] systemd[1]: Finished modprobe@loop.service - Load Kernel Module loop.
"[    5.110512] systemd[1]: systemd-repart.service - Repartition Root Disk was skipped because no trigger condition checks were met.
"[    5.110619] EXT4-fs (sda1): re-mounted. Quota mode: none.
"[    5.114200] systemd[1]: Finished systemd-remount-fs.service - Remount Root and Kernel File Systems.
"[    5.114887] systemd[1]: systemd-firstboot.service - First Boot Wizard was skipped because of an unmet condition check (ConditionFirstBoot=yes).
"[    5.116890] systemd[1]: Starting systemd-sysusers.service - Create System Users...
"[    5.117837] systemd[1]: Mounted sys-fs-fuse-connections.mount - FUSE Control File System.
"[    5.143643] lp: driver loaded but no devices found
"[    5.146505] systemd[1]: Finished systemd-sysusers.service - Create System Users.
"[    5.152797] ppdev: user-space parallel port driver
"[    5.164458] systemd[1]: Starting systemd-tmpfiles-setup-dev.service - Create Static Device Nodes in /dev...
"[    5.165044] systemd[1]: Finished systemd-modules-load.service - Load Kernel Modules.
"[    5.167641] systemd[1]: Starting systemd-sysctl.service - Apply Kernel Variables...
"[    5.195004] systemd[1]: Finished systemd-sysctl.service - Apply Kernel Variables.
"[    5.204030] systemd[1]: Finished systemd-tmpfiles-setup-dev.service - Create Static Device Nodes in /dev.
"[    5.206309] systemd[1]: Starting systemd-udevd.service - Rule-based Manager for Device Events and Files...
"[    5.208878] systemd[1]: Started systemd-journald.service - Journal Service.
"[    5.580702] intel_pmc_core INT33A1:00:  initialized
"[    5.592463] ACPI: AC: AC Adapter [ACAD] (off-line)
"[    5.680734] mei_me 0000:00:16.0: enabling device (0000 -> 0002)
"[    5.725738] input: PC Speaker as /devices/platform/pcspkr/input/input12
"[    5.758234] ee1004 0-0050: 512 byte EE1004-compliant SPD EEPROM, read-only
"[    5.758322] ee1004 0-0052: 512 byte EE1004-compliant SPD EEPROM, read-only
"[    5.772315] acer_wmi: Acer Laptop ACPI-WMI Extras
"[    5.772345] acer_wmi: Function bitmap for Communication Button: 0x801
"[    5.845447] input: Acer WMI hotkeys as /devices/virtual/input/input13
"[    5.980585] alg: No test for fips(ansi_cprng) (fips_ansi_cprng)
"[    5.987673] iTCO_vendor_support: vendor-support=0
"[    5.992071] platform regulatory.0: firmware: direct-loading firmware regulatory.db
"[    5.992418] platform regulatory.0: firmware: direct-loading firmware regulatory.db.p7s
"[    6.004415] RAPL PMU: API unit is 2^-32 Joules, 5 fixed counters, 655360 ms ovfl timer
"[    6.004419] RAPL PMU: hw unit of domain pp0-core 2^-14 Joules
"[    6.004420] RAPL PMU: hw unit of domain package 2^-14 Joules
"[    6.004422] RAPL PMU: hw unit of domain dram 2^-14 Joules
"[    6.004423] RAPL PMU: hw unit of domain pp1-gpu 2^-14 Joules
"[    6.004424] RAPL PMU: hw unit of domain psys 2^-14 Joules
"[    6.005134] mc: Linux media interface: v0.10
"[    6.027413] cryptd: max_cpu_qlen set to 1000
"[    6.028830] iTCO_wdt iTCO_wdt: Found a Intel PCH TCO device (Version=4, TCOBASE=0x0400)
"[    6.033506] iTCO_wdt iTCO_wdt: initialized. heartbeat=30 sec (nowayout=0)
"[    6.056502] AVX2 version of gcm_enc/dec engaged.
"[    6.056543] AES CTR mode by8 optimization enabled
"[    6.060629] videodev: Linux video capture interface: v2.00
"[    6.098486] Intel(R) Wireless WiFi driver for Linux
"[    6.105255] snd_hda_intel 0000:00:1f.3: bound 0000:00:02.0 (ops i915_audio_component_bind_ops [i915])
"[    6.110620] pcieport 0000:00:1d.2: Intel SPT PCH root port ACS workaround enabled
"[    6.134914] usb 1-7: Found UVC 1.00 device HD WebCam (04f2:b571)
"[    6.165594] input: HD WebCam: HD WebCam as /devices/pci0000:00/0000:00:14.0/usb1/1-7/1-7:1.0/input/input14
"[    6.165691] usbcore: registered new interface driver uvcvideo
"[    6.166556] iwlwifi 0000:02:00.0: firmware: direct-loading firmware iwlwifi-7265D-29.ucode
"[    6.166574] iwlwifi 0000:02:00.0: Found debug destination: EXTERNAL_DRAM
"[    6.166577] iwlwifi 0000:02:00.0: Found debug configuration: 0
"[    6.166845] iwlwifi 0000:02:00.0: loaded firmware version 29.4063824552.0 7265D-29.ucode op_mode iwlmvm
"[    6.252423] snd_hda_codec_realtek hdaudioC0D0: autoconfig for ALC255: line_outs=1 (0x14/0x0/0x0/0x0/0x0) type:speaker
"[    6.252431] snd_hda_codec_realtek hdaudioC0D0:    speaker_outs=0 (0x0/0x0/0x0/0x0/0x0)
"[    6.252435] snd_hda_codec_realtek hdaudioC0D0:    hp_outs=1 (0x21/0x0/0x0/0x0/0x0)
"[    6.252439] snd_hda_codec_realtek hdaudioC0D0:    mono: mono_out=0x0
"[    6.252441] snd_hda_codec_realtek hdaudioC0D0:    inputs:
"[    6.252444] snd_hda_codec_realtek hdaudioC0D0:      Headset Mic=0x19
"[    6.252447] snd_hda_codec_realtek hdaudioC0D0:      Internal Mic=0x12
"[    6.272145] Adding 999420k swap on /dev/sda6.  Priority:-2 extents:1 across:999420k SSFS
"[    6.352188] EXT4-fs (sda7): mounted filesystem with ordered data mode. Quota mode: none.
"[    6.357592] EXT4-fs (sda5): mounted filesystem with ordered data mode. Quota mode: none.
"[    6.375395] Bluetooth: Core ver 2.22
"[    6.375429] NET: Registered PF_BLUETOOTH protocol family
"[    6.375431] Bluetooth: HCI device and connection manager initialized
"[    6.375436] Bluetooth: HCI socket layer initialized
"[    6.375439] Bluetooth: L2CAP socket layer initialized
"[    6.375445] Bluetooth: SCO socket layer initialized
"[    6.383717] EXT4-fs (sda8): mounted filesystem with ordered data mode. Quota mode: none.
"[    6.398686] loop0: detected capacity change from 0 to 8
"[    6.399467] loop1: detected capacity change from 0 to 8504
"[    6.400650] loop2: detected capacity change from 0 to 113992
"[    6.406847] loop3: detected capacity change from 0 to 131016
"[    6.427892] iwlwifi 0000:02:00.0: Detected Intel(R) Dual Band Wireless AC 7265, REV=0x210
"[    6.427995] loop4: detected capacity change from 0 to 130448
"[    6.442622] iwlwifi 0000:02:00.0: Applying debug destination EXTERNAL_DRAM
"[    6.443048] iwlwifi 0000:02:00.0: Allocated 0x00400000 bytes for firmware monitor.
"[    6.446179] loop5: detected capacity change from 0 to 113384
"[    6.447896] iwlwifi 0000:02:00.0: base HW address: 88:78:73:99:12:ea, OTP minor version: 0x0
"[    6.467336] loop6: detected capacity change from 0 to 151296
"[    6.470290] loop7: detected capacity change from 0 to 170072
"[    6.485645] loop10: detected capacity change from 0 to 90720
"[    6.492669] loop11: detected capacity change from 0 to 377880
"[    6.499396] loop8: detected capacity change from 0 to 1034424
"[    6.504602] loop12: detected capacity change from 0 to 378440
"[    6.515525] loop9: detected capacity change from 0 to 79520
"[    6.525710] squashfs: version 4.0 (2009/01/31) Phillip Lougher
"[    6.546944] systemd-journald[296]: Received client request to flush runtime journal.
"[    6.549809] loop13: detected capacity change from 0 to 187776
"[    6.558728] loop14: detected capacity change from 0 to 433128
"[    6.577656] loop15: detected capacity change from 0 to 832024
"[    6.583505] loop17: detected capacity change from 0 to 64480
"[    6.590148] loop16: detected capacity change from 0 to 716176
"[    6.592762] loop18: detected capacity change from 0 to 151288
"[    6.592908] loop19: detected capacity change from 0 to 135512
"[    6.598737] loop20: detected capacity change from 0 to 170112
"[    6.612201] iwlwifi 0000:02:00.0 wlp2s0: renamed from wlan0
"[    6.626473] input: HDA Digital PCBeep as /devices/pci0000:00/0000:00:1f.3/sound/card0/input15
"[    6.626569] input: HDA Intel PCH Front Headphone as /devices/pci0000:00/0000:00:1f.3/sound/card0/input16
"[    6.626700] input: HDA Intel PCH HDMI/DP,pcm=3 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input17
"[    6.626860] input: HDA Intel PCH HDMI/DP,pcm=7 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input18
"[    6.630787] input: HDA Intel PCH HDMI/DP,pcm=8 as /devices/pci0000:00/0000:00:1f.3/sound/card0/input19
"[    6.672517] usbcore: registered new interface driver btusb
"[    6.682018] intel_rapl_common: Found RAPL domain package
"[    6.682023] intel_rapl_common: Found RAPL domain core
"[    6.682025] intel_rapl_common: Found RAPL domain uncore
"[    6.682027] intel_rapl_common: Found RAPL domain dram
"[    6.682029] intel_rapl_common: Found RAPL domain psys
"[    6.686749] Bluetooth: hci0: Legacy ROM 2.5 revision 1.0 build 3 week 17 2014
"[    6.688968] bluetooth hci0: firmware: direct-loading firmware intel/ibt-hw-37.8.10-fw-1.10.3.11.e.bseq
"[    6.688974] Bluetooth: hci0: Intel Bluetooth firmware file: intel/ibt-hw-37.8.10-fw-1.10.3.11.e.bseq
"[    7.071770] Bluetooth: hci0: Intel BT fw patch 0x32 completed & activated
"[    7.859474] Bluetooth: BNEP (Ethernet Emulation) ver 1.3
"[    7.859478] Bluetooth: BNEP filters: protocol multicast
"[    7.859484] Bluetooth: BNEP socket layer initialized
"[    7.867114] Bluetooth: MGMT ver 1.22
"[    7.893305] NET: Registered PF_ALG protocol family
"[    8.199713] NET: Registered PF_QIPCRTR protocol family
"[    8.281407] r8169 0000:03:00.1: firmware: direct-loading firmware rtl_nic/rtl8411-2.fw
"[    8.308315] Generic FE-GE Realtek PHY r8169-0-301:00: attached PHY driver (mii_bus:phy_addr=r8169-0-301:00, irq=MAC)
"[    8.519881] r8169 0000:03:00.1 enp3s0f1: Link is Down
"[    8.539842] iwlwifi 0000:02:00.0: Applying debug destination EXTERNAL_DRAM
"[    8.625562] iwlwifi 0000:02:00.0: Applying debug destination EXTERNAL_DRAM
"[    8.626733] iwlwifi 0000:02:00.0: FW already configured (0) - re-configuring
"[    8.690722] iwlwifi 0000:02:00.0: Applying debug destination EXTERNAL_DRAM
"[    8.775704] iwlwifi 0000:02:00.0: Applying debug destination EXTERNAL_DRAM
"[    8.776844] iwlwifi 0000:02:00.0: FW already configured (0) - re-configuring
"[    9.076254] vboxdrv: TSC mode is Invariant, tentative frequency 2303999419 Hz
"[    9.369546] loop21: detected capacity change from 0 to 8
"[   11.663045] Bluetooth: RFCOMM TTY layer initialized
"[   11.663055] Bluetooth: RFCOMM socket layer initialized
"[   11.663062] Bluetooth: RFCOMM ver 1.11
"[   59.263423] wlp2s0: authenticate with 4a:f6:4e:85:7a:12
"[   59.263478] wlp2s0: 80 MHz not supported, disabling VHT
"[   59.266919] wlp2s0: send auth to 4a:f6:4e:85:7a:12 (try 1/3)
"[   59.341371] wlp2s0: authenticate with 4a:f6:4e:85:7a:12
"[   59.341399] wlp2s0: send auth to 4a:f6:4e:85:7a:12 (try 1/3)
"[   59.343842] wlp2s0: authenticated
"[   59.348163] wlp2s0: associate with 4a:f6:4e:85:7a:12 (try 1/3)
"[   59.359099] wlp2s0: RX AssocResp from 4a:f6:4e:85:7a:12 (capab=0x431 status=0 aid=1)
"[   59.362467] wlp2s0: associated
"[   59.588912] IPv6: ADDRCONF(NETDEV_CHANGE): wlp2s0: link becomes ready
"[   66.793368] usb 1-5: USB disconnect, device number 2
"[   67.204337] usb 1-5: new full-speed USB device number 4 using xhci_hcd
"[   67.354931] usb 1-5: New USB device found, idVendor=8087, idProduct=0a2a, bcdDevice= 0.01
"[   67.354953] usb 1-5: New USB device strings: Mfr=0, Product=0, SerialNumber=0
"[   67.373752] Bluetooth: hci0: Legacy ROM 2.5 revision 1.0 build 3 week 17 2014
"[   67.373955] bluetooth hci0: firmware: direct-loading firmware intel/ibt-hw-37.8.10-fw-1.10.3.11.e.bseq
"[   67.373971] Bluetooth: hci0: Intel Bluetooth firmware file: intel/ibt-hw-37.8.10-fw-1.10.3.11.e.bseq
"[   67.684937] systemd-journald[296]: Time jumped backwards, rotating.
"[   67.697806] Bluetooth: hci0: Intel BT fw patch 0x32 completed & activated
"[   67.750401] Bluetooth: MGMT ver 1.22"

        "[OK] Loading kernel modules...",
        "[INFO] Checking file system integrity...",
        "[OK] Mounting root partition...",
        "[OK] Activating swap space...",
        "[OK] Initializing hardware abstraction layer...",
        "[INFO] Detecting devices: Keyboard [OK]",
        "[INFO] Detecting devices: Mouse [OK]",
        "[INFO] Detecting devices: Display [OK]",
        "[OK] Starting network services...",
        "[OK] Configuring IP address...",
        "[INFO] Connecting to DNS server...",
        "[OK] Starting SSH daemon...",
        "[OK] Starting Apache web server...",
        "[OK] Starting MySQL database server...",
        "[INFO] Verifying user authentication...",
        "[SUCCESS] System startup complete. Welcome!"
    ];

    let messageIndex = 0;

    // Délai pour afficher les messages après le logo
    setTimeout(() => {
        const interval = setInterval(() => {
            if (messageIndex < messages.length) {
                const line = document.createElement('p');
                line.textContent = messages[messageIndex];
                line.classList.add('code-line');
                loaderMessages.appendChild(line);
                messageIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    loader.style.display = 'none';
                    mainContent.classList.remove('hidden');
                }, 1000);
            }
        }, 300); // Intervalle entre les messages
    }, 2000); // Attente de 2 secondes avant de démarrer les messages
};
