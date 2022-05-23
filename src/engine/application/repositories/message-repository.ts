import { PhraseCreatorDomainDto } from "src/engine/domain/phrase-creator.domain";
import { IBaseRepository } from "./base-repository";

export interface MessageRepository extends IBaseRepository<PhraseCreatorDomainDto> {

}