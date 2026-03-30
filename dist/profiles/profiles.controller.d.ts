import { CreateProfileDto } from 'src/dto/create-profile.dto';
import { UpdateProfileDto } from 'src/dto/update-profile.dto';
export declare class ProfilesController {
    findAll(location: string): {
        location: string;
    }[];
    findOne(id: string): {
        id: string;
    };
    create(createProfileDto: CreateProfileDto): {
        name: string;
        description: string;
    };
    update(id: string, updateProfileDto: UpdateProfileDto): {
        name: string;
        description: string;
        id: string;
    };
    remove(id: string): void;
}
