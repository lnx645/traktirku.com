import React from 'react';
import {
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  CreditCard,
  History,
  MoreHorizontal
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function SimpleBalancePage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground  tracking-widest">Total Saldo</p>
          <h1 className="text-4xl font-black">Rp 0,00</h1>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="font-bold border-2 shadow-sm">
            <CreditCard className="mr-2 h-4 w-4" /> Rekening
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-sm px-6">
            <Plus className="mr-2 h-4 w-4" /> Tarik Saldo
          </Button>
        </div>
      </div>

      <Separator className="h-0.5 py-0" />

      {/* Ringkasan Singkat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs  tracking-wider">Saldo Tertunda</span>
          </div>
          <p className="text-2xl font-bold text-foreground/80 italic">Rp 0,00</p>
          <p className="text-xs text-muted-foreground">Akan tersedia otomatis dalam 1-3 hari kerja.</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground font-bold">
            <Wallet className="h-4 w-4" />
            <span className="text-xs  tracking-wider">Tujuan Utama</span>
          </div>
          <p className="text-lg font-bold">Dana — 0815****2003</p>
          <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary ">Terverifikasi</Badge>
        </div>
      </div>

      {/* Riwayat Minimalis */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-bold tracking-tight">Aktivitas Terakhir</h2>
        </div>

        <div className="border-t">
          <Table>
            <TableBody>
              {/* Row 1 */}
              <TableRow className="hover:bg-muted/30 border-b group">
                <TableCell className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <ArrowDownLeft className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Donasi Masuk</p>
                      <p className="text-xs text-muted-foreground font-medium">16 April 2026 • QRIS</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right py-4">
                  <p className="font-black text-primary">+Rp 50.000</p>
                  <Button variant="ghost" size="sm" className="h-6 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Detail</Button>
                </TableCell>
              </TableRow>

              {/* Row 2 */}
              <TableRow className="hover:bg-muted/30 border-b group">
                <TableCell className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Penarikan Saldo</p>
                      <p className="text-xs text-muted-foreground font-medium">14 April 2026 • Ke Dana</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right py-4">
                  <p className="font-black text-foreground">-Rp 150.000</p>
                  <Badge className="text-[9px] h-4 bg-muted text-muted-foreground font-bold hover:bg-muted ">Selesai</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Button variant="ghost" className="w-full text-muted-foreground font-bold text-xs hover:text-primary">
          Lihat Semua Riwayat Transaksi
        </Button>
      </div>

    </div>
  );
}
