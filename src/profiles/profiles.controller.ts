import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode,
    HttpStatus, ParseUUIDPipe, } from '@nestjs/common';
import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {}
    // Get /profiles
    @Get()
    findAll(){
        return this.profilesService.findAll();
    }

    // Get /profiles/id
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: UUID){
            return this.profilesService.findOne(id);    
    }

    // Post /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto){
        return this.profilesService.create(createProfileDto);
    }

    // Put /profiles/:id
    @Put(':id')
    update(
        @Param('id', ParseUUIDPipe) id: UUID, 
        @Body() updateProfileDto: UpdateProfileDto
    ){
        return this.profilesService.update(id, updateProfileDto);
    }
    
    // Delete /profiles/:id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesService.remove(id);
    }

}
