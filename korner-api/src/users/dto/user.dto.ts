import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  surname: string;

  @ApiModelProperty()
  credit?: number;
}
