import { DiskModule } from './../disk/disk.module';
import { CpuModule } from './../cpu/cpu.module';
import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController],
  imports: [CpuModule, DiskModule]
})
export class ComputerModule {}
