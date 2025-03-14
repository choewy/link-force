import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { SetOptionalRequestUserID, SetRequiredRequestUserID } from 'src/persistent/decorators';
import { UseAuthGuard } from 'src/common/auth/auth.guard';

import { LinkService } from './link.service';
import { CreateLinkRequestDTO } from './dto/create-link-request.dto';
import { CreateLinkResponseDTO } from './dto/create-link-response.dto';
import { HitLinkRequestDTO } from './dto/hit-link-request.dto';
import { HitLinkResponseDTO } from './dto/hit-link-response.dto';
import { DeleteLinkRequestDTO } from './dto/delete-link-request.dto';

@ApiTags('링크')
@Controller('links')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  @UseAuthGuard()
  @SetOptionalRequestUserID()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '링크 생성' })
  @ApiCreatedResponse({ type: CreateLinkResponseDTO })
  async createLink(@Body() body: CreateLinkRequestDTO) {
    return this.linkService.createLink(body);
  }

  @Post('hit')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '링크 접속' })
  @ApiOkResponse({ type: HitLinkResponseDTO })
  async hitLink(@Body() body: HitLinkRequestDTO) {
    return this.linkService.hitLink(body.linkId);
  }

  @Delete(':id')
  @UseAuthGuard()
  @SetRequiredRequestUserID()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: '링크 삭제' })
  @ApiNoContentResponse()
  async deleteLink(@Param() param: DeleteLinkRequestDTO) {
    return this.linkService.deleteLink(param.id);
  }
}
