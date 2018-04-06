/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';

// -- raw grammar typings

export interface ILocation {
  readonly filename: string;
  readonly line: number;
  readonly char: number;
}

export interface ILocatable {
  readonly $vscodeTextmateLocation?: ILocation;
}

export interface IRawGrammar extends ILocatable {
  /** A dictionary of rules which can be included from other places in the grammar. */
  repository: IRawRepository;
  /** This should be a unique name for the grammar. */
  readonly scopeName: string;
  /** An array with the actual rules used to parse the document. */
  readonly patterns: IRawRule[];
  readonly injections?: { [expression: string]: IRawRule };
  readonly injectionSelector?: string;

  /** An array of file type extensions that the grammar should (by default) be used with. */
  readonly fileTypes?: string[];
  /** This should be a unique name for the grammar. */
  readonly name?: string;
  /** A regular expression which is matched against the first line of the document (when it is first loaded). */
  readonly firstLineMatch?: string;
}

export interface IRawRepositoryMap {
  [name: string]: IRawRule;
  $self: IRawRule;
  $base: IRawRule;
}

export type IRawRepository = IRawRepositoryMap & ILocatable;

export interface IRawRule extends ILocatable {
  id?: number;

  /**
   * This allows you to reference a different language,
   * recursively reference the grammar itself or a rule declared in this file’s <code>repository</code>.
   */
  readonly include?: string;

  /** The name which gets assigned to the portion matched. */
  readonly name?: string;
  /** This key is similar to the `name` key but only assigns the `name` to the text between what is matched by the `begin`/`end` patterns. */
  readonly contentName?: string;

  /** A regular expression which is used to identify the portion of text to which the `name` should be assigned. */
  readonly match?: string;
  readonly captures?: IRawCaptures;
  readonly begin?: string;
  readonly beginCaptures?: IRawCaptures;
  readonly end?: string;
  readonly endCaptures?: IRawCaptures;
  readonly while?: string;
  readonly whileCaptures?: IRawCaptures;
  /** An array with the actual rules used to parse the document. */
  readonly patterns?: IRawRule[];

  /** A dictionary of rules which can be included from other places in the grammar. */
  readonly repository?: IRawRepository;

  readonly applyEndPatternLast?: boolean;
}

export interface IRawCapturesMap {
  [captureId: string]: IRawRule;
}

/**
 * These keys allow you to assign attributes to the captures of the `match`, `begin`, or `end` patterns.
 * Using the captures key for a `begin`/`end` rule is short-hand for giving both `beginCaptures` and `endCaptures` with same values.
 */
export type IRawCaptures = IRawCapturesMap & ILocatable;
