import { ApiProperty } from '@nestjs/swagger';

export class SignTokenResponseDTO {
  @ApiProperty({ type: String })
  accessToken: string;

  @ApiProperty({ type: String })
  refreshToken: string;

  constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
